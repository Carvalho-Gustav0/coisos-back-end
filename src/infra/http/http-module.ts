import { Module } from "@nestjs/common";
import { CoisosController } from "./controllers/user.controller";
import { DatabaseModule } from "../database/database.module";
import { RegisterUser } from "@application/use-cases/user/login/register-user";
import { FindUser } from "@application/use-cases/user/find-user";
import { FindAllUsers } from "@application/use-cases/user/find-all-users";

@Module({
    imports: [DatabaseModule],
    controllers: [CoisosController],
    providers: [RegisterUser, FindUser, FindAllUsers]
})

export class HttpModule { }