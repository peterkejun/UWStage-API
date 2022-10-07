import { Jobs } from 'src/jobs/jobs.entity';
import { Terms } from 'src/terms/terms.entity';
import { Users } from 'src/users/users.entity';
import { DataSource, FindOperator, Repository } from 'typeorm';
import { Employments } from './employments.entity';
export declare class EmploymentsService {
    private EmploymentsRepository;
    private dataSource;
    constructor(EmploymentsRepository: Repository<Employments>, dataSource: DataSource);
    findOne(id: number | FindOperator<number>): Promise<Employments>;
    count(job: Jobs): Promise<number>;
    calculateAverageRating(job: Jobs): Promise<number>;
    createOne(employment: Employments, user: Users, job: Jobs, term: Terms): Promise<Employments>;
}
