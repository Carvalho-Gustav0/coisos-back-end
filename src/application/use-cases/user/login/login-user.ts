import { UserRepository } from "src/application/repositories/user-repository";
import { UserLoginFailed } from "src/application/use-cases/errors/user-login-failed";
import { Injectable } from "@nestjs/common";

export interface LoginUserRequest {
    user_token?: string;
    email: string;
    password: string;
}

export interface ResponseLogin {
    id_user: string;
    name: string;
    email: string;
    cpf: string;
    user_token: string;
}

@Injectable()
export class LoginUser {
    constructor(private userRepository: UserRepository) { }

    async execute(request: LoginUserRequest): Promise<ResponseLogin> {
        try {
            const user = await this.userRepository.loginUser(request)

            if (!user) {
                throw new UserLoginFailed()
            }

            return user
        } catch (e) {
            throw e
        }
    }
}