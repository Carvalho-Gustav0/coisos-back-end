import { IsNotEmpty, Length, isNotEmpty } from 'class-validator';

export class CreateUserBody {
  
  id_user: string;

  user_token: string;

  @IsNotEmpty()
  @Length(3, 100)
  name: string;

  @IsNotEmpty()
  @Length(11, 11)
  cpf: string;

  @IsNotEmpty()
  @Length(10, 150)
  email: string;

  @IsNotEmpty()
  @Length(6, 30)
  password: string;
}
