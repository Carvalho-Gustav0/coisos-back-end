import { User } from "src/application/entities/user/user";
import { PrismaService } from "../prisma.service";
import { Injectable } from "@nestjs/common";
import { PrismaUserMapper } from "../mappers/prisma-user-mapper";
import { FindUserRequest } from "src/application/use-cases/user/find-user";
import { LoginUserRequest, ResponseLogin } from "src/application/use-cases/user/login/login-user";
import { UserLoginFailed } from "src/application/use-cases/errors/user-login-failed";
import { AuthService } from "src/application/use-cases/user/login/auth";
import { UserRepository } from "src/application/repositories/user-repository";

@Injectable()
export class PrismaCoisosRepository implements UserRepository {

    constructor(private prismaService: PrismaService, private authService: AuthService) { }

    async getUsers(): Promise<any[]> {
        const usersPrisma = await this.prismaService.user.findMany()
        const users: User[] = []

        if (!usersPrisma) {
            return users
        } else {
            usersPrisma.map((value) => {
                users.push(PrismaUserMapper.toDomain(value))
            })
        }


        return users
    }

    async findUser(findUserRequest: FindUserRequest): Promise<User | null> {
        const userCPF = await this.prismaService.user.findFirst({
            where: {
                cpf: findUserRequest.cpf
            }
        })

        const userEmail = await this.prismaService.user.findFirst({
            where: {
                email: findUserRequest.email
            }
        })

        if (!userCPF && !userEmail) {
            return null
        }

        return PrismaUserMapper.toDomain(userCPF)
    }

    async create(user: User): Promise<void> {
        const raw = PrismaUserMapper.toPrisma(user)

        await this.prismaService.user.create({
            data: raw
        })
    }

    async loginUser(loginRequest: LoginUserRequest): Promise<ResponseLogin> {
        const { email, password } = loginRequest;
        try {
            const user = await this.prismaService.user.findFirst({
                where: {
                    email: email,
                    password: password
                }
            });

            if (!user) {
                throw new UserLoginFailed();
            }

            const token = await this.authService.generateToken({ id_user: user.id_user });

            user.user_token = token

            return PrismaUserMapper.toDomainLogin(user);
        } catch (e) {
            throw e;
        }
    }

}