import { User } from "./user"

describe('User', () => {
    it('should be able to create a new user', () => {
        const user = new User({
            id_user: '1',
            name: 'string',
            cpf: 'string',
            email: 'string',
            password: 'string'
        })

        expect(user).toBeTruthy()
    })
})