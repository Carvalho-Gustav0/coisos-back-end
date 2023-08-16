import { IsEmail, IsNotEmpty, Length, isNotEmpty } from 'class-validator';

export class CreateUserBody {
  
  id_user: string;

  user_token: string;

  @IsNotEmpty()
  @Length(3, 100)
  name: string;

  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @Length(6, 30)
  password: string;
}
