import { Injectable } from '@nestjs/common';

export type IUser = {
  id: number;
  name: string;
  username: string;
  password: string;
};

@Injectable()
export class UsersService {
  private readonly usersMocked: IUser[] = [
    {
      id: 1,
      name: 'Angel Antonio',
      username: 'drakeredfield',
      password: 'password',
    },
    {
      id: 2,
      name: 'Carlos Moreno',
      username: 'noobmaster64',
      password: '123456',
    },
  ];

  async findUser(username: string): Promise<IUser> {
    return this.usersMocked.find((user) => user.username === username);
  }
}
