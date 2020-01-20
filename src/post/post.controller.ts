import * as express from 'express';
import { getRepository } from 'typeorm';
import PostNotFoundException from '../exceptions/PostNotFoundException';
import Controller from '../interfaces/controller.interface';
import validationMiddleware from '../middleware/validation.middleware';
import CreatePostDto from './post.dto';
import Post from './post.entity';

export class PostController implements Controller {
  public path = '/posts';
  public router = express.Router();
  private postRespository = getRepository(Post);

  constructor() {
    this.initializeRoutes();
  }
}
