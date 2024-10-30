import { HttpException, HttpStatus } from '@nestjs/common';

export class UserLoginFailedAuthentication extends HttpException {
    constructor() {
        super('Email or Password incorrect', HttpStatus.UNAUTHORIZED);
    }
}

export class UserLoginEmpty extends HttpException {
    constructor(field: string) {
        super(`${field} can't be empty`, HttpStatus.BAD_REQUEST);
    }
}
export class UserLoginNotFoundEmail extends HttpException {
    constructor() {
        super('Email not registered', HttpStatus.UNAUTHORIZED);
    }
}