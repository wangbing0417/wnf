const { exec } = require('child_process');
const rimraf = require('rimraf');
const chalk = require('chalk');

const { clone, compile } = require('../utils/idl');
const { generateServices } = require('../utils/service');

// 错误信息扁平化
const errorsFormatter = (errors, res) => errors.flat(Infinity).reduce((a, c) => {
  if (c instanceof Error) {
    console.log(chalk.red(c.message || c));
    a.push(c);
  } else {
    res && res.push(c);
  }

  return a;
}, []);

// 编译thrift的结果列表
const compileRes = [];

module.exports = (config, rpcCommon) => {
  // 判断thrift环境
  exec('thrift --version', err => {
    if (err) {
      console.log(chalk.yellow('请先配置thrift环境: 可执行以下两行命令\n'));
      console.log(chalk.red('brew tap red/homebrew git@code.devops.xiaohongshu.com:fulishe-ops/homebrew.git\n'));
      console.log(chalk.red('brew install red/homebrew/thrift@0110\n'));
    } else {
      rimraf(rpcCommon.idlRepo, e => {
        e && e instanceof Error
          ? console.log(chalk.red(e.message || e))
          : Promise.all(config.map(c => (async () => await clone(c.idl, rpcCommon.idlRepo))()))
            .then(res => {
              if (errorsFormatter(res).length === 0) {
                Promise.all(
                  config.map(c => (async () => await compile(c, rpcCommon.idlRepo, rpcCommon.idl))())
                ).then(res => {
                  if (errorsFormatter(res, compileRes).length === 0) {
                    // 生成服务
                    generateServices(compileRes, rpcCommon.services)
                      .then(() => {
                        console.log(chalk.blue('\ncompile idls complete.\n'));
                      })
                      .catch(() => {
                        console.log(chalk.red('\ngenerateServices fail\n'));
                      });
                  }
                });
              }
            })
            .catch(() => {
              console.log('error');
            });
      });
    }
  });
};
