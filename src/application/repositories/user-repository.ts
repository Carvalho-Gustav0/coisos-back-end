import { User } from "../entities/user/user";

export abstract class UserRepository {
    abstract create(user: User): Promise<void>;
    abstract findById(userId: string): Promise<User | null>;
    abstract getUsers(): Promise<User[] | []>;
}