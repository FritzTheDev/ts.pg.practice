import { HttpException } from './HttpException';

export class UserWithThatEmailExistsException extends HttpException {
  constructor(email: string) {
    super(400, `User With email: ${email} already exists`);
  }
}
