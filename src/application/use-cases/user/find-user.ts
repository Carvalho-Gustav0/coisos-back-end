import { User } from "@application/entities/user/user";
import { UserRepository } from "@application/repositories/user-repository";
import { Injectable, InternalServerErrorException } from "@nestjs/common";

export interface FindUserRequest {
    cpf: string;
    email: string;
}

@Injectable()
export class FindUser {
    constructor(private userRepository: UserRepository) { }

    async execute(request: FindUserRequest): Promise<User | null> {
        const user = await this.userRepository.findUser(request)

        try {
            if (!user) {
                return null
            }

            return user
        } catch (e) {
            throw new InternalServerErrorException('Error finding user.');
        }
    }
}