import { Module } from "@nestjs/common";
import { PrismaService } from "./prisma/prisma.service";
import { UserRepository } from "@application/repositories/user-repository";
import { PrismaCoisosRepository } from "./prisma/repositories/prisma-user-repository";

@Module({
    providers: [
        PrismaService,
        {
            provide: UserRepository,
            useClass: PrismaCoisosRepository
        }
    ],
    exports: [
        UserRepository
    ]
})

export class DatabaseModule { }