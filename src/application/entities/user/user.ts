import { randomUUID } from "crypto";

export interface UserProps {
    id_user: string;
    name: string;
    cpf: string;
    email: string,
    password: string
}

export class User {
    private _id: string
    private props: UserProps

    constructor(props: UserProps) {
        this._id = randomUUID()
        this.props = props
    }

    public get id() {
        return this._id
    }

    public set name(name: string) {
        this.props.name = name;
    }

    public get name(): string {
        return this.props.name
    }

    public set cpf(cpf: string) {
        this.props.cpf = cpf;
    }

    public get cpf(): string {
        return this.props.cpf
    }

    public set email(email: string) {
        this.props.email = email;
    }

    public get email(): string {
        return this.props.email
    }

    public set password(password: string) {
        this.props.password = password;
    }

    public get password(): string {
        return this.props.password
    }

    public set id_user(id_user: string) {
        this.props.id_user = id_user;
    }

    public get id_user(): string {
        return this.props.id_user
    }
}