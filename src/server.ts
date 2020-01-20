import 'dotenv/config';
import 'reflect-metadata';
import { createConnection } from 'typeorm';

import App from './app';
import config from './ormconfig';

(async () => {
  try {
    await createConnection(config);
  } catch (error) {
    console.log('Error Connecting To The Database');
    return error;
  }
  const app = new App([new PostController()]);
  app.listen();
})();
