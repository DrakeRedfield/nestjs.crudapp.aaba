import { Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';

@Injectable()
export class AuthService {
  constructor(private userServices: UsersService) { }

  async validateUser(username: string, password: string) {
    const user = await this.userServices.findUser(username);

    if (user && user.password === password) {
      const { username, password, ...rest } = user;
      return rest;
    }
  }
}
