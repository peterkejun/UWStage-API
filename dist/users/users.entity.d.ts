import { Employments } from '../employments/employments.entity';
export declare class Users {
    id: number;
    firstName: any;
    lastName: string;
    program: string;
    email: string;
    password: string;
    employments: Employments[];
}
