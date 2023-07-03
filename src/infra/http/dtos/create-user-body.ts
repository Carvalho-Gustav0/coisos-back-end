import { IsNotEmpty, Length } from 'class-validator';

export class CreateUserBody {
  @IsNotEmpty()
  id_user: string;

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
