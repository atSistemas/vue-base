import express from 'express';

import base from 'base/';
import envConf from './enviroment';
import applyStaticsPaths from './statics';
import applyEnvMiddleWare from './middleware';
import applyServerRouting from './middleware/routing-middleware';

const app = express();

function launchServer() {
  app.listen(envConf.port, function (err) {
    if (err) {
      base.console.error(`${err}`);
      return;
    }
    base.console.success(`Server up on http://localhost:${envConf.port}`);
  });
}

function prepareServer() {
  applyEnvMiddleWare(app)
    .then(() => {
      base.console.info('Checking static paths...');
      applyStaticsPaths(app);
    })
    .then(() => {
      base.console.info('Checking server routing...');
      applyServerRouting(app);
    })
    .then(() => {
      base.console.info('Setting up server...');
      launchServer();
    })
    .catch((e) => {
      base.console.error(`Server Error ${e}...`);
    });
}

prepareServer();
