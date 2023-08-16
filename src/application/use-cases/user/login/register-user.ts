import { User } from "../../../entities/user/user";
import { UserRepository } from "../../../repositories/user-repository";
import { UserAlreadyCreated } from "../../../use-cases/errors/user-already-created";
import { Injectable } from "@nestjs/common";

interface RegisterUserRequest {
    id_user: string;
    user_token: string;
    name: string;
    email: string;
    password: string;
}

@Injectable()
export class RegisterUser {
    constructor(private userRepository: UserRepository) { }

    async execute(request: RegisterUserRequest): Promise<User> {
        const { id_user, user_token, name, email, password } = request

        const already_user_created = await this.userRepository.findUser({ email });

        if (already_user_created) {
            throw new UserAlreadyCreated()
        }

        try {
            const user = new User({
                id_user,
                user_token,
                name,
                email,
                password
            })

            await this.userRepository.create(user);
            return user
        } catch (e) {
            throw e
        }
    }
}