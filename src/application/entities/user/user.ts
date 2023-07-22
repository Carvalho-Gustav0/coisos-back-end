export interface UserProps {
    id_user: string;
    user_token: string;
    name: string;
    cpf: string;
    email: string,
    password: string
}

export class User {
    private user: UserProps

    constructor(user: UserProps) {
        this.user = user
    }

    public set name(name: string) {
        this.user.name = name;
    }

    public get name(): string {
        return this.user.name
    }

    public set user_token(user_token: string) {
        this.user.user_token = user_token;
    }

    public get user_token(): string {
        return this.user.user_token
    }

    public set cpf(cpf: string) {
        this.user.cpf = cpf;
    }

    public get cpf(): string {
        return this.user.cpf
    }

    public set email(email: string) {
        this.user.email = email;
    }

    public get email(): string {
        return this.user.email
    }

    public set password(password: string) {
        this.user.password = password;
    }

    public get password(): string {
        return this.user.password
    }

    public set id_user(id_user: string) {
        this.user.id_user = id_user;
    }

    public get id_user(): string {
        return this.user.id_user;
    }
}