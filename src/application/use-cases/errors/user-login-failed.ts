import { HttpException, HttpStatus } from '@nestjs/common';

export class UserLoginFailed extends HttpException {
    constructor() {
        super('Email or Password incorrect', HttpStatus.UNAUTHORIZED);
    }
}

export class UserEmailFailed extends HttpException {
    constructor() {
        super('Unregistered email', HttpStatus.NOT_FOUND)
    }
}