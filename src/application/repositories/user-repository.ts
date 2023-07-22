import { FindUserRequest } from "@application/use-cases/user/find-user";
import { User } from "../entities/user/user";
import { LoginUserRequest } from "@application/use-cases/user/login/login-user";

export abstract class UserRepository {
    abstract create(user: User): Promise<void>;
    abstract findUser(findUserRequest: FindUserRequest): Promise<User | null>;
    abstract loginUser(loginRequest: LoginUserRequest): Promise<User | null>;
    abstract getUsers(): Promise<User[] | []>;
}