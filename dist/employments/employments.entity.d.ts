import { Users } from '../users/users.entity';
import { Terms } from '../terms/terms.entity';
import { Jobs } from '../jobs/jobs.entity';
import { Posts } from '../posts/posts.entity';
export declare class Employments {
    id: number;
    title: string;
    level: string;
    duration: number;
    country: string;
    user: Users;
    job: Jobs;
    term: Terms;
    post: Posts;
}
