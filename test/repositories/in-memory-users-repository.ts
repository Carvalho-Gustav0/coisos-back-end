import { User } from 'src/application/entities/user/user'
import { UserRepository } from 'src/application/repositories/user-repository'
import { FindUserRequest } from 'src/application/use-cases/user/find-user'
import { LoginUserRequest } from 'src/application/use-cases/user/login/login-user'

export class InMemoryUsersRepository implements UserRepository {
    public users: User[] = []

    async create(user: User) {
        this.users.push(user)
    }

    async findUser(findUserRequest: FindUserRequest): Promise<User> {
        const { cpf, email } = findUserRequest
        const user = this.users.find(item => item.cpf == cpf && item.email == email)

        if (!user) {
            return null
        }

        return user
    }

    async getUsers() {
        const listUsers = this.users
        return listUsers
    }

    async loginUser(loginRequest: LoginUserRequest): Promise<User> {
        const { user_token, email, password } = loginRequest

        const user = this.users.find(item => item.email == email && item.password == password)

        if (!user) {
            return null
        }

        return user
    }
}