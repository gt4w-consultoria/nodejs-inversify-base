import 'reflect-metadata';
import { Request, Response } from 'express';
import { controller, httpPost } from 'inversify-express-utils';
import AuthService from '../services/AuthService';

@controller('/auth')
class AuthController {
  @httpPost('/login')
  async login(request: Request, response: Response): Promise<any> {
    AuthService.login(request.body);
  }
}

export default new AuthController();
