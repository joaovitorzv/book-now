import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { classToClass } from 'class-transformer';

import AuthenticateUserService from '../../../services/AuthenticateUserService';

class SessionsController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { email, password } = request.body;

    try {
      const authenticateUser = container.resolve(AuthenticateUserService);
    } catch (err) {
      console.log('caiu no erro');
      console.log(err);
    }

    const authenticateUser = container.resolve(AuthenticateUserService);
    const { user, token } = await authenticateUser.execute({ email, password });

    return response.status(200).json({ user: classToClass(user), token });
  }
}

export default SessionsController;