import { UserRepository } from "@application/repositories/user-repository";
import { UserLoginFailed } from "@application/use-cases/errors/user-login-failed";
import { Injectable } from "@nestjs/common";
import { User } from "@prisma/client";

export interface LoginUserRequest {
    user_token?: string;
    email: string;
    password: string;
}

@Injectable()
export class LoginUser {
    constructor(private userRepository: UserRepository) { }

    async execute(request: LoginUserRequest): Promise<User | null> {
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