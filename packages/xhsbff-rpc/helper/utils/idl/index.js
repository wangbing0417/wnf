const { exec } = require('child_process');
const path = require('path');
const fs = require('fs-extra');
const gitClone = require('git-clone');

const move = (from, to, resolve) => {
  fs.move(from, to, { overwrite: true }, e => {
    resolve(e);
  });
};

const _compile = (project, services, repo, output, connection, resolve) => {
  const repoPath = path.join(repo, project);

  Promise.all(
    services.reduce(
      (a, c) => [
        ...a,
        new Promise(_resolve => {
          const thriftPath = path.join(repoPath, c.path);
          const command = `thrift -r --gen js:node ${c.file}`;

          console.log(`compiling ${c.file}...`);
          exec(command, { cwd: thriftPath }, e => {
            const error = (e instanceof Error && e) || void 0;

            error || console.log(`compile ${c.file} complete.`);
            _resolve(
              error
                || (c.name instanceof Array ? c.name : [c.name]).map(service => ({
                  ...c,
                  name: service,
                  idl: path.join(output, project, service),
                  connection: c.connection || connection,
                }))
            );
          });
        }),
      ],
      []
    )
  ).then(res => {
    res.reduce((_a, _c) => {
      _c && _c instanceof Error && _a.push(_c);
      return _a;
    }, []).length > 0
      ? resolve(res)
      : services.length
        ? move(path.join(repoPath, 'gen-nodejs'), path.join(output, project), e => {
          resolve((e instanceof Error && e) || res);
        })
        : resolve(res);
  });
};

// 下载idl文件并编译成js版本
module.exports = {
  clone: ({ host, group, project, branch }, repo) => new Promise(resolve => {
    const repoUrl = `https://${
      process.env.GIT_USERNAME && process.env.GIT_PASSWORD
        ? `${process.env.GIT_USERNAME}:${process.env.GIT_PASSWORD}@`
        : ''
    }${host}/${group}/${project}.git`;
    const repoPath = path.join(repo, project);

    console.log(`pulling ${project} from ${repoUrl} ...`);

    gitClone(repoUrl, repoPath, { checkout: branch }, e => {
      e instanceof Error || console.log(`pull ${project} complete.`);
      resolve(e);
    });
  }),
  compile: ({ idl: { project, services = []}, connection }, repo, output) => new Promise(resolve => {
    _compile(project, services, repo, output, connection, resolve);
  }),
};
