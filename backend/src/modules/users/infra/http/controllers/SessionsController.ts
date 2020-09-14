import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { classToClass } from 'class-transformer';

import AuthenticateUserService from '../../../services/AuthenticateUserService';

class SessionsController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { email, password } = request.body;

    try {
      container.resolve(AuthenticateUserService);
    } catch (error) {
      console.log(error)
    }
    const authenticateUser = container.resolve(AuthenticateUserService);

    try {
      await authenticateUser.execute({ email, password });
    } catch (error) {
      console.log(error);
    }
    const { user, token } = await authenticateUser.execute({ email, password });

    return response.status(200).json({ user: classToClass(user), token });
  }
}

export default SessionsController;