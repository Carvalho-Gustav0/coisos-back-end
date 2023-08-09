import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateUserBody } from '../dtos/create-user-body';
import { FindUser, FindUserRequest } from 'src/application/use-cases/user/find-user';
import { LoginUser, LoginUserRequest } from 'src/application/use-cases/user/login/login-user';
import { randomUUID } from 'crypto';

@Controller('user')
export class CoisosController {
  constructor( private findUser: FindUser, private loginUser: LoginUser) { }

  

  @Post('login')
  async userLogin(@Body() body: LoginUserRequest) {
    const user = await this.loginUser.execute(body)

    return user
  }

  @Get('user')
  async getUser(@Body() body: FindUserRequest) {
    const user = await this.findUser.execute(body)

    return user
  }
}
