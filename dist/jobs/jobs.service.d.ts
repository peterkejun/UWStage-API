import { EmploymentsService } from 'src/employments/employments.service';
import { PostsService } from 'src/posts/posts.service';
import { DataSource, FindOperator, FindOptionsWhere, Repository, UpdateResult } from 'typeorm';
import { Jobs } from './jobs.entity';
export declare class JobsService {
    private JobsRepository;
    private employmentsService;
    private postService;
    private dataSource;
    constructor(JobsRepository: Repository<Jobs>, employmentsService: EmploymentsService, postService: PostsService, dataSource: DataSource);
    findAll(companyId?: number): Promise<Jobs[]>;
    findOne(id: number | FindOperator<number>): Promise<Jobs & {
        [key: string]: any;
    }>;
    findBy(options: FindOptionsWhere<Jobs>): Promise<Jobs[]>;
    remove(id: number): Promise<void>;
    createOne(Jobs: Jobs): Promise<Jobs>;
    updateOne(id: number, job: Jobs): Promise<UpdateResult>;
}
