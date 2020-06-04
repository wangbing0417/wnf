const path = require('path');

const root = path.resolve(__dirname, '../'); // 项目根目录

// rpc文件路径配置
module.exports = {
  prefix: '/node-rpc', // rpc请求路径前缀
  idlRepo: `${root}/rpc/idl-repo`,
  idl: `${root}/rpc/idl`,
  services: `${root}/rpc/services.js`,

  // controllers: `${root}/rpc/controllers.js`,
  // routers: `${root}/rpc/routers.js`,
  // apis: `${root}/rpc/apis.js`,
};
