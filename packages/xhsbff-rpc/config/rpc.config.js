const idlDefault = {
  host: 'code.devops.xiaohongshu.com', // 指定idl所在repo的git host
  group: 'fulishe-idls', // 指定idl所在repo的git group
};
const envDefault = {
  development: {
    host: 'zookeeper-zookeeper.int.xiaohongshu.com:2181',
    pathPrefix: '/sit_service',
  },
  test: {
    host: 'zookeeper-zookeeper.int.xiaohongshu.com:2181',
    pathPrefix: '/sit_service',
  },
  sit: {
    host: 'zookeeper-zookeeper.int.xiaohongshu.com:2181',
    pathPrefix: '/sit_service',
  },
  c: {
    host: 'fls-test-zk:2182,fls-test-zk:2183,fls-test-zk:2184',
    pathPrefix: '/beta_service',
  },
  production: {
    host: '10.0.1.153:2181,10.0.1.152:2181,10.0.1.176:2181,10.0.1.228:2181,10.0.1.202:2181',
    pathPrefix: '/prod_service_v1',
  },
};

module.exports = [
  {
    idl: {
      ...idlDefault,
      project: 'common',
      branch: 'master',
    }, // 未定义services则只拉取repo
  },
  {
    idl: {
      ...idlDefault,
      project: 'item',
      branch: 'develop',
      services: [
        {
          path: './',
          file: 'item_center.thrift',
          name: 'ItemCenterService',
          namespace: 'com.xiaohongshu.fls.rpc.item_center_service',
        },
      ],
    },
    connection: {
      env: {
        ...envDefault,
        development: {
          ...envDefault.development,
          tags: ['0.0.92'], // 按顺序从前往后寻找匹配的连接
          tagsOnly: true, // 是否只连接指定的tags,默认false
        },
      },
    },
  },
];
