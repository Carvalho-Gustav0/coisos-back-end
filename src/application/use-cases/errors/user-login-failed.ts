import { HttpException, HttpStatus } from '@nestjs/common';

export class UserLoginFailed extends HttpException {
    constructor() {
        super('Email or Password incorrect', HttpStatus.UNAUTHORIZED);
    }
}