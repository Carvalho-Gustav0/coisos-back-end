import { FindUserRequest } from "@application/use-cases/user/find-user";
import { User } from "../entities/user/user";

export abstract class UserRepository {
    abstract create(user: User): Promise<void>;
    abstract findUser(findUserRequest: FindUserRequest): Promise<User | null>;
    abstract getUsers(): Promise<User[] | []>;
}