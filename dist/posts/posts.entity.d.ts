import { Employments } from '../employments/employments.entity';
export declare class Posts {
    id: number;
    rating: number;
    subject: string;
    content: string;
    createdDate: Date;
    updatedDate: Date;
    employment: Employments;
}
