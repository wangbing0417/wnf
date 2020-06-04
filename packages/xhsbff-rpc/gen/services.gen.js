const { generateServices } = require('../helper');
const rpcConfig = require('../config/rpc.config');
const rpcCommon = require('../config/rpc.common.config');

generateServices(rpcConfig, rpcCommon);
