import { UserRepository } from "../../../repositories/user-repository";
import { UserLoginFailedAuthentication } from "../../errors/user-login-failed";
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
    user_token: string;
}

@Injectable()
export class LoginUser {
    constructor(private userRepository: UserRepository) { }

    async execute(request: LoginUserRequest): Promise<ResponseLogin> {
        try {
            const user = await this.userRepository.loginUser(request)

            if (!user) {
                throw new UserLoginFailedAuthentication()
            }

            return user
        } catch (e) {
            throw e
        }
    }
}