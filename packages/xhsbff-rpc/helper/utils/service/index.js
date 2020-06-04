const path = require('path');
const fs = require('fs-extra');

const register = (services, writerStream, output) => {
  for (const config of services) {
    const service = require(path.relative(__dirname, config.idl));
    const clientMethods = Object.keys(service.Client.prototype);
    const fns = clientMethods.reduce((_a, _c) => {
      const prefixs = ['send_', 'recv_'];

      !prefixs.some(prefix => _c.indexOf(prefix) > -1)
        && prefixs.every(prefix => clientMethods.includes(`${prefix}${_c}`))
        && _a.push(_c);
      return _a;
    }, []);

    writerStream.write(`${config.name}: {\n`);
    for (const fn of fns) {
      const { connection } = config;
      const namespace = config.namespace || connection.namespace;

      writerStream.write(`${fn}: async (context, request, options) => {
        const connection = ${JSON.stringify(connection.env)}
        const env = process.env.NODE_ENV || 'development'
        const envTag = process.env.SERVICE_ENV_TAG || void 0

        return await nrc.generateRPCPromise(
          connection[env].host,
          connection[env].pathPrefix + '/' + '${namespace}${namespace ? '.' : ''}${config.name}',
          require('./${path.relative(path.join(output, '../'), config.idl)}'),
          '${fn}',
          context,
          request,
          {
            tags: [...envTag ? [envTag] : connection[env].tags || [], null],
            tagsOnly: connection[env].tagsOnly,
            transport: ${(connection.transport && `'${connection.transport}'`) || void 0},
            protocol: ${(connection.protocol && `'${connection.protocol}'`) || void 0},
            ...options
          }
        )
      },\n`);
    }
    writerStream.write(`},\n`);
  }
};

// 生成services.js
module.exports = {
  generateServices: (services, output) =>
    new Promise((resolve, reject) => {
      fs.ensureFileSync(output);
      const writerStream = fs.createWriteStream(output);

      writerStream.write(`/* eslint-disable */\n`);
      writerStream.write(`const path = require('path')\n`);
      writerStream.write(`const nrc = require('../helper')\n\n`);
      writerStream.write(`module.exports = {\n`);
      register(services, writerStream, output);
      writerStream.write(`}\n`);
      writerStream.end();
      writerStream
        .on('error', e => {
          reject(e);
        })
        .on('finish', () => {
          resolve();
        });
    }),
};
