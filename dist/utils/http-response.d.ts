import { HttpException, HttpStatus } from '@nestjs/common';
export declare const makeHttpException: (status: HttpStatus, msg?: string) => HttpException;
export declare const throwIfNullish: <T>(value: T | Promise<T>, exception: Error) => Promise<T>;
export declare const makeNotFoundMsg: (entity: string) => string;
