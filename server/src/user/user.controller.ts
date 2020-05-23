import { Controller, Get, Post, Body } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiProperty } from '@nestjs/swagger';
import { UserModel } from './user.model';
import { jwt } from 'jsonwebtoken';
console.log('jwt: ', jwt);

class UserData {
  @ApiProperty({
    description: '手机号码',
    example: '18538300839',
  })
  username: string;
  @ApiProperty({
    description: '密码',
    example: '123456',
  })
  password: string;
}

@ApiTags('用户模块')
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
  @ApiOperation({
    summary: '注册',
  })
  @Post('/register')
  async register(@Body() body: UserData) {
    console.log('body: ', body);
    let { username } = await UserModel.create(body);
    return {
      code: 0,
      data: {
        username,
        token: '123',
      },
    };
  }
  @ApiOperation({
    summary: '登录',
  })
  @Post('/login')
  async login() {}
}
