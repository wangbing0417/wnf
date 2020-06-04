const { createConnection, createClient } = require('./wrapper');
const { translateInt64 } = require('../utils/int64');

const create = async (host, path, service, tags, tagsOnly, transport, protocol) => {
  const connection = await createConnection(host, path, tags, tagsOnly, transport, protocol);
  const client = createClient(service, connection);

  connection.on('error', error => {
    console.log('connection error', error);
  });
  return {
    connection,
    client,
  };
};

const _generateRPCPromise = async (
  host,
  path,
  service,
  functionName,
  context = {},
  request,
  tags,
  tagsOnly,
  transport,
  protocol
) => {
  const { connection, client } = await create(host, path, service, tags, tagsOnly, transport, protocol);

  return new Promise((resolve, reject) => {
    client[functionName](context, request, (error, response) => {
      connection.end();
      console.log('调用完成');

      if (error) {
        console.log('调用失败');

        reject(error);
      } else {
        resolve(translateInt64(response));
      }
    });
  });
};

module.exports = _generateRPCPromise;
