import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateUserBody } from '../dtos/create-user-body';
import { UserViewModel } from '../viewmodels/user-viewmodel';
import { RegisterUser } from '@application/use-cases/user/register-user';
import { GetUser } from '@application/use-cases/user/get-user';
import { GetAllUsers } from '@application/use-cases/user/get-users';


@Controller('user')
export class CoisosController {

  constructor(private registerUser: RegisterUser, private getUserById: GetUser, private getAllUsers: GetAllUsers) { }

  @Post('create')
  async createUser(@Body() body: CreateUserBody) {
    const { id_user, name, cpf, email, password } = body;

    const { user } = await this.registerUser.execute({
      id_user,
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
  async getUser() {
    const user = await this.getUserById.execute('de76ec17-2198-4481-bdc1-1949d8ce0fe6')

    return user
  }

  @Get('users')
  async getUsers() {
    const users = await this.getAllUsers.execute()

    return users
  }
}
