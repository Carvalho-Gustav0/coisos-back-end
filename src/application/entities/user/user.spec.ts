import { User } from "./user"

describe('User', () => {
    it('should be able to create a new user', () => {
        const user = new User({
            id_user: '1',
            user_token: '1',
            name: 'string',
            email: 'string',
            password: 'string'
        })

        expect(user).toBeTruthy()
    })
})