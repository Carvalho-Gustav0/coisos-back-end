import { User } from "@application/entities/user/user";
import { UserRepository } from "@application/repositories/user-repository";
import { UserAlreadyCreated } from "@application/use-cases/errors/user-already-created";
import { Injectable, InternalServerErrorException } from "@nestjs/common";

interface RegisterUserRequest {
    id_user: string;
    user_token: string;
    name: string;
    cpf: string;
    email: string;
    password: string;
}

@Injectable()
export class RegisterUser {
    constructor(private userRepository: UserRepository) { }

    async execute(request: RegisterUserRequest): Promise<User> {
        const { id_user, user_token, name, cpf, email, password } = request

        const already_user_created = await this.userRepository.findUser({ cpf, email });

        if (already_user_created) {
            throw new UserAlreadyCreated()
        }

        try {
            const user = new User({
                id_user,
                user_token,
                name,
                cpf,
                email,
                password
            })

            await this.userRepository.create(user);

            return user
        } catch (e) {
            throw new InternalServerErrorException('Error creating user.');
        }
    }
}