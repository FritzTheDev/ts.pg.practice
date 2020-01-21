import 'dotenv/config';
import 'reflect-metadata';
import { createConnection } from 'typeorm';

import { App } from './app';
import { config } from './ormconfig';
import { PostController } from './post/post.controller';
import { validateEnv } from './utils/validateenv';
import { AuthenticationController } from './authentication/authentication.controller';
import { CategoryController } from './category/category.controller';
import { AddressController } from './address/address.controller';

validateEnv();

(async () => {
  try {
    await createConnection(config);
  } catch (error) {
    console.log('Error Connecting To The Database');
    return error;
  }
  const app = new App([
    new PostController(),
    new AuthenticationController(),
    new CategoryController(),
    new AddressController()
  ]);
  app.listen();
})();
