import { User } from "@application/entities/user/user";
import { UserRepository } from "@application/repositories/user-repository";
import { Injectable } from "@nestjs/common";


interface RegisterUserRequest {
    id_user: string;
    name: string;
    cpf: string;
    email: string;
    password: string;
}

interface RegisterUserResponse {
    user: User
}

@Injectable()
export class RegisterUser {
    constructor(private userRepository: UserRepository) { }

    async execute(request: RegisterUserRequest): Promise<RegisterUserResponse> {
        const { id_user, name, cpf, email, password } = request

        const user = new User({
            id_user,
            name,
            cpf,
            email,
            password
        })

        await this.userRepository.create(user);

        return { user }
    }
}