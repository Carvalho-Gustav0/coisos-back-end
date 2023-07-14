import { User } from "@application/entities/user/user";
import { UserRepository } from "@application/repositories/user-repository";
import { Injectable } from "@nestjs/common";
import { UserNotFound } from "../errors/users-not-found";

@Injectable()
export class FindUser {
    constructor(private userRepository: UserRepository) { }

    async execute(request: string): Promise<User | null> {
        const user_id = request

        const user = await this.userRepository.findById(user_id)

        if (!user) {
            throw new UserNotFound()
        }

        return user
    }
}