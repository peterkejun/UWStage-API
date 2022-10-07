import { Employments } from 'src/employments/employments.entity';
import { Jobs } from 'src/jobs/jobs.entity';
import { DataSource, FindOperator, Repository } from 'typeorm';
import { Posts } from './posts.entity';
export declare class PostsService {
    private PostsRepository;
    private dataSource;
    constructor(PostsRepository: Repository<Posts>, dataSource: DataSource);
    findAll(jobId?: number, termId?: number): Promise<Posts[]>;
    findOne(id: number | FindOperator<number>): Promise<Posts>;
    countByJob(job: Jobs): Promise<number>;
    remove(id: number): Promise<void>;
    createOne(post: Posts, employment: Employments): Promise<Posts>;
}
