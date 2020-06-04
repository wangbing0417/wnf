const thrift = require('thrift');
const { selectChild } = require('../zookeeper-subscriber');

const createConnection = async (host, path, tags, tagsOnly, transport, protocol) => {
  const { childHost, childPort } = await selectChild(host, path, tags, tagsOnly);

  return thrift.createConnection(childHost, childPort, {
    transport: thrift[transport],
    protocol: thrift[protocol],
  });
};

const createClient = (service, connection) => thrift.createClient(service, connection);

module.exports = {
  createConnection,
  createClient,
  thrift,
};
