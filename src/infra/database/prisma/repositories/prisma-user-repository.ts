import { User } from "@application/entities/user/user";
import { UserRepository } from "@application/repositories/user-repository";
import { PrismaService } from "../prisma.service";
import { Injectable } from "@nestjs/common";
import { PrismaUserMapper } from "../mappers/prisma-user-mapper";

@Injectable()
export class PrismaCoisosRepository implements UserRepository {

    constructor(private prismaService: PrismaService) { }

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

    async findById(userId: string): Promise<User | null> {
        const user = await this.prismaService.user.findUnique(
            {
                where: {
                    id_user: userId
                }
            }
        )

        if (!user) {
            return null
        }

        return PrismaUserMapper.toDomain(user)
    }

    async create(user: User): Promise<void> {
        const raw = PrismaUserMapper.toPrisma(user)

        await this.prismaService.user.create({
            data: raw
        })
    }

}