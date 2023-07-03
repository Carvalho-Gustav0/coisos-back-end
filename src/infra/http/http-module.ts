import { Module } from "@nestjs/common";
import { CoisosController } from "./controllers/user.controller";
import { DatabaseModule } from "../database/database.module";
import { RegisterUser } from "@application/use-cases/user/register-user";
import { GetUser } from "@application/use-cases/user/get-user";
import { GetAllUsers } from "@application/use-cases/user/get-users";

@Module({
    imports: [DatabaseModule],
    controllers: [CoisosController],
    providers: [RegisterUser, GetUser, GetAllUsers]
})

export class HttpModule { }