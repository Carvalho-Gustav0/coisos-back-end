import { User } from '@application/entities/user/user'
import { UserRepository } from '@application/repositories/user-repository'
import { FindUserRequest } from '@application/use-cases/user/find-user'

export class InMemoryUsersRepository implements UserRepository {
    public users: User[] = []

    async create(user: User) {
        this.users.push(user)
    }

    async findUser(findUserRequest: FindUserRequest): Promise<User> {
        const user = this.users.find(item => item.cpf == findUserRequest.cpf && item.email == findUserRequest.email)

        if (!user) {
            return null
        }

        return user
    }

    async getUsers() {
        const listUsers = this.users
        return listUsers
    }
}