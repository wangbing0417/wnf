const { zookeeper, createClient } = require('./wrapper');

const storage = {};

// const getData = (client, host, path, child) => {
//   return new Promise((resolve) => {
//     client.getData(`${path}/${child}`, (error, data) => {
//       let _data

//       if (error) {
//         console.log('client.getData error', error)
//       }
//       try {
//         _data = JSON.parse(data.toString('utf-8'))
//       } catch (e) {
//         _data = {}
//       }

//       resolve({
//         host: child,
//         data: _data
//       })
//     })
//   })
// }

// const storeChildren = async (client, host, path, children, resolve) => {
//   let res = await children.reduce(async (a, c) => {
//     let acc = await a

//     const cur = await getData(client, host, path, c)

//     acc.push(cur)
//     return acc
//   }, Promise.resolve([]))

//   storage[`${path}@${host}`] = res

//   console.log('发现节点')

//   resolve && resolve(res)
// }

const getChildren = (client, host, path, resolve, reject) => {
  client.getChildren(
    path,
    event => {
      console.log('client.getChildren', event);

      getChildren(client, host, path);
    },
    (error, children) => {
      if (error) {
        console.log('client.getChildren error', error);
        reject(error);
      } else {
        storeChildren(client, host, path, children, resolve);
      }
    }
  );
};

// 嗅探可用的host
const _createSubscription = (host, path, sessionTimeout, spinDelay, retries) => new Promise((resolve, reject) => {
  const client = createClient(host, sessionTimeout, spinDelay, retries);

  client.on('state', state => {
    let type = 'INFO';

    let info = state.getName();

    switch (state) {
      case zookeeper.State.AUTH_FAILED:
        type = 'ERROR';
        reject(new Error('zookeeper AUTH_FAILED'));
        break;
      case zookeeper.State.DISCONNECTED:
      case zookeeper.State.EXPIRED:
        type = 'WARNING';
        info = `${info}, 3s后重连`;
        setTimeout(() => {
          _createSubscription(host, path, sessionTimeout, spinDelay, retries);
        }, 3000);
        break;
      case zookeeper.State.SYNC_CONNECTED:
      case zookeeper.State.CONNECTED_READ_ONLY:
        getChildren(client, host, path, resolve, reject);
        break;
    }
  });

  client.connect();
});

const selectChild = async (host, path, tags = [], tagsOnly = false) => {
  const stored = (storage[`${path}@${host}`] || (await _createSubscription(host, path))).reduce((a, c) => {
    a.push({
      host: c.host,
      tags: c.data.tags,
    });
    return a;
  }, []);

  try {
    const checked = [];

    tags.forEach(tag => {
      if (checked.length < 1) {
        stored.forEach(x => {
          if (tag === x.tags) {
            checked.push(x);
          }
        });
      }
    });

    const children = checked.length || tagsOnly ? checked : stored;
    const child = children[Math.round(Math.random() * (children.length - 1))];

    console.log('建立连接');

    return {
      childHost: child.host.split(':')[0],
      childPort: child.host.split(':')[1],
    };
  } catch (e) {
    console.log('未发现可用节点', e);

    return {
      childHost: void 0,
      childPort: void 0,
    };
  }
};

module.exports = {
  // _createSubscription,
  selectChild,
};
