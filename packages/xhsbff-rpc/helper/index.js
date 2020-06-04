// const { _createSubscription } = require('./zookeeper-subscriber')
const _generateRPCPromise = require('./thrift-client');
const generateServices = require('./generator');

module.exports = {
  //
  generateRPCPromise: (host, path, service, functionName, context, request, options) => _generateRPCPromise(
    host,
    path,
    service,
    functionName,
    context,
    request,
    options && options.tags,
    options && options.tagsOnly,
    (options && options.transport) || 'TFramedTransport',
    (options && options.protocol) || 'TBinaryProtocol'
  ),

  // createSubscription: (host, path, options) => {
  //   return _createSubscription(
  //     host,
  //     path,
  //     (options && options.sessionTimeout) || 30000,
  //     (options && options.spinDelay) || 1000,
  //     (options && options.retries) || 0
  //   )
  // },
  // 将编译后的idl生成服务
  generateServices,
};
