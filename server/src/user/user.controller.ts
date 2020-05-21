import { Controller, Get } from '@nestjs/common';
import { UserModel } from './user.model';

@Controller('user')
export class UserController {
  @Get()
  async index() {
    return {
      code: 0,
      data: await UserModel.find(),
    };
  }
  @Get('/create')
  async create() {
    return await UserModel.create({
      username: 18538300839,
      password: 'dfgfdgdf34234',
      realname: '齐秦',
    });
  }
}
