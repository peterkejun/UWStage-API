import { Jobs } from '../jobs/jobs.entity';
import { Employments } from '../employments/employments.entity';
export declare class Terms {
    id: number;
    season: string;
    year: string;
    jobs: Jobs[];
    employments: Employments[];
}
