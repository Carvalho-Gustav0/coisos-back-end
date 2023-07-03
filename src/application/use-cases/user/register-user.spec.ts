import { InMemoryUsersRepository } from "@test/repositories/in-memory-users-repository"
import { makeUser } from "@test/factories/user-factory"
import { RegisterUser } from "./register-user"

describe('Register User', () => {
    it('should be able to register a user', async () => {
        const usersRepository = new InMemoryUsersRepository()
        const registerUser = new RegisterUser(usersRepository)

        const { user } = await registerUser.execute(makeUser({}))

        expect(usersRepository.users).toHaveLength(1)
        expect(usersRepository.users[0]).toEqual(user)
    })
})