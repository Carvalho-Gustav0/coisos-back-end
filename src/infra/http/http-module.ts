import { Module } from "@nestjs/common";
import { CoisosController } from "./controllers/user.controller";
import { DatabaseModule } from "../database/database.module";
import { FindUser } from "../../application/use-cases/user/find-user";
import { LoginUser } from "../../application/use-cases/user/login/login-user";
import { RegisterUser } from "../../application/use-cases/user/login/register-user";

@Module({
    imports: [DatabaseModule],
    controllers: [CoisosController],
    providers: [RegisterUser, FindUser, LoginUser]
})

export class HttpModule { }