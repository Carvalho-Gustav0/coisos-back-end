import { HttpException, HttpStatus } from '@nestjs/common';

export class UserAlreadyCreated extends HttpException {
    constructor() {
        super('User already created.', HttpStatus.CONFLICT);
    }
}