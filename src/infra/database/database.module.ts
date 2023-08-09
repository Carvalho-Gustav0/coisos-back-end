// database.module.ts
import { Module } from "@nestjs/common";
import { JwtModule } from '@nestjs/jwt'; // Importe o JwtModule
import { PrismaService } from "./prisma/prisma.service";
import { UserRepository } from "src/application/repositories/user-repository";
import { PrismaCoisosRepository } from "./prisma/repositories/prisma-user-repository";
import { AuthService } from "src/application/use-cases/user/login/auth";

@Module({
    imports: [JwtModule.register({
        secret: process.env.TOKEN_BASE,
        signOptions: { expiresIn: '24h' },
    })],
    providers: [
        PrismaService,
        {
            provide: UserRepository,
            useClass: PrismaCoisosRepository
        },
        AuthService
    ],
    exports: [
        UserRepository
    ]
})
export class DatabaseModule { }