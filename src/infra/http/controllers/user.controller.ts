import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateUserBody } from '../dtos/create-user-body';
import { UserViewModel } from '../viewmodels/user-viewmodel';
import { RegisterUser } from '@application/use-cases/user/login/register-user';
import { FindUser, FindUserRequest } from '@application/use-cases/user/find-user';
import { LoginUser, LoginUserRequest } from '@application/use-cases/user/login/login-user';
import { randomUUID } from 'crypto';


@Controller('user')
export class CoisosController {
  constructor(private registerUser: RegisterUser, private findUser: FindUser, private loginUser: LoginUser) { }

  @Post('create')
  async createUser(@Body() body: CreateUserBody) {
    const { name, cpf, email, password } = body;

    const id_user = randomUUID()

    const user = await this.registerUser.execute({
      id_user,
      user_token: '',
      name,
      cpf,
      email,
      password
    })

    return {
      user: UserViewModel.toHTTP(user)
    }
  }

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
