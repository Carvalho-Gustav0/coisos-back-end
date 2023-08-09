import { Module } from "@nestjs/common";
import { CoisosController } from "./controllers/user.controller";
import { DatabaseModule } from "../database/database.module";
import { RegisterUser } from "src/application/use-cases/user/login/register-user";
import { FindUser } from "src/application/use-cases/user/find-user";
import { LoginUser } from "src/application/use-cases/user/login/login-user";

@Module({
    imports: [DatabaseModule],
    controllers: [CoisosController],
    providers: [RegisterUser, FindUser, LoginUser]
})

export class HttpModule { }