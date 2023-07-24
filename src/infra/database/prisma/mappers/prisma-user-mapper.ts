import { User } from "@application/entities/user/user";
import { ResponseLogin } from "@application/use-cases/user/login/login-user";
import { User as RawUser } from "@prisma/client";

export class PrismaUserMapper {
    static toPrisma(user: User) {
        return {
            id_user: user.id_user,
            user_token: user.user_token,
            name: user.name,
            cpf: user.cpf,
            email: user.email,
            password: user.password,
        }
    }

    static toDomain(raw: RawUser): User {
        return new User({
            id_user: raw.id_user,
            user_token: raw.user_token,
            name: raw.name,
            cpf: raw.cpf,
            email: raw.email,
            password: raw.password,
        })
    }

    static toDomainLogin(raw: RawUser): ResponseLogin {
        return {
            id_user: raw.id_user,
            user_token: raw.user_token,
            name: raw.name,
            cpf: raw.cpf,
            email: raw.email,
        }
    }
}