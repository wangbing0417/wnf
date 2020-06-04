const zookeeper = require('node-zookeeper-client');

const createClient = (host, sessionTimeout, spinDelay, retries) => zookeeper.createClient(host, {
  sessionTimeout,
  spinDelay,
  retries,
});

module.exports = {
  zookeeper,
  createClient,
};
