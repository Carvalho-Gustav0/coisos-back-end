import { User } from "@application/entities/user/user";
import { UserRepository } from "@application/repositories/user-repository";
import { Injectable } from "@nestjs/common";
import { UserNotFound } from "../errors/user-not-found";

@Injectable()
export class FindAllUsers {
    constructor(private userRepository: UserRepository) { }

    async execute(): Promise<User[] | []> {
        const users = await this.userRepository.getUsers()

        if (!users) {
            throw new UserNotFound()
        }

        return users
    }
}