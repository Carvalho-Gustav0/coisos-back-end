import { User } from "../../entities/user/user";
import { UserRepository } from "../../repositories/user-repository";
import { Injectable } from "@nestjs/common";

export interface FindUserRequest {
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
            throw e
        }
    }
}