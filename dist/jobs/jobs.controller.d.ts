import { UpdateResult } from 'typeorm';
import { Jobs } from './jobs.entity';
import { JobsService } from './jobs.service';
export declare class JobsController {
    private readonly jobsService;
    constructor(jobsService: JobsService);
    findAll(company: number): Promise<Jobs[]>;
    findOne(id: number): Promise<Jobs>;
    createOne(company: Jobs): Promise<Jobs>;
    deleteOne(id: number): Promise<void>;
    updateOne(id: number, company: Jobs): Promise<UpdateResult>;
}
