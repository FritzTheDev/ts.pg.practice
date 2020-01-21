import { HttpException } from './HttpException';

export class CategoryNotFoundException extends HttpException {
  constructor(id: string) {
    super(404, `Category with id: ${id} not found.`);
  }
}
