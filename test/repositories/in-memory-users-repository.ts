import { User } from '@application/entities/user/user'
import { UserRepository } from '@application/repositories/user-repository'

export class InMemoryUsersRepository implements UserRepository {
    public users: User[] = []

    async create(user: User) {
        this.users.push(user)
    }

    async findById(userId: string): Promise<User> {
        const user = this.users.find(item => item.id_user == userId)

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