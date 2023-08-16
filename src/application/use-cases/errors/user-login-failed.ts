import { HttpException, HttpStatus } from '@nestjs/common';

export class UserLoginFailedAuthentication extends HttpException {
    constructor() {
        super('Email or Password incorrect', HttpStatus.UNAUTHORIZED);
    }
}

export class UserLoginNotFoundEmail extends HttpException {
    constructor() {
        super('Email not registered', HttpStatus.UNAUTHORIZED);
    }
}