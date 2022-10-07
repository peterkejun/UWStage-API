import { Terms } from '../terms/terms.entity';
import { Employments } from '../employments/employments.entity';
import { Company } from '../company/company.entity';
export declare class Jobs {
    id: number;
    title: string;
    level: string;
    duration: number;
    country: string;
    company: Company;
    terms: Terms[];
    employments: Employments[];
}
