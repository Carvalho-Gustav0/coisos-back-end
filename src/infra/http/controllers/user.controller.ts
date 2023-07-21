import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateUserBody } from '../dtos/create-user-body';
import { UserViewModel } from '../viewmodels/user-viewmodel';
import { RegisterUser } from '@application/use-cases/user/login/register-user';
import { FindUser, FindUserRequest } from '@application/use-cases/user/find-user';
import { FindAllUsers } from '@application/use-cases/user/find-all-users';


@Controller('user')
export class CoisosController {

  constructor(private registerUser: RegisterUser, private findUser: FindUser, private findAllUsers: FindAllUsers) { }

  @Post('create')
  async createUser(@Body() body: CreateUserBody) {
    const { id_user, user_token, name, cpf, email, password } = body;

    const user = await this.registerUser.execute({
      id_user,
      user_token,
      name,
      cpf,
      email,
      password
    })

    return {
      user: UserViewModel.toHTTP(user)
    }
  }

  @Get('user')
  async getUser(@Body() body: FindUserRequest) {
    const user = await this.findUser.execute(body)

    return user
  }

  @Get('users')
  async getUsers() {
    const users = await this.findAllUsers.execute()

    return users
  }
}
