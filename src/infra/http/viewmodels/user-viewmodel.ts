import { User } from "@application/entities/user/user";

export class UserViewModel {
    static toHTTP(user: User) {
        return {
            id_user: user.id_user,
            user_token: user.user_token,
            name: user.name,
            cpf: user.cpf,
            email: user.email,
            password: user.password
        }
    }
}