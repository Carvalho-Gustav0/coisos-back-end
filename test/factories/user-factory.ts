import { User, UserProps } from "@application/entities/user/user";

type Override = Partial<UserProps>

export function makeUser(override: Override = {}) {
    return new User({
        id_user: '1',
        user_token: '1',
        name: "1",
        cpf: "1",
        email: '1',
        password: '1',
        ...override
    })
}