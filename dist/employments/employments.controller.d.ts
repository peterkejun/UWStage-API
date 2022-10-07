import { JobsService } from 'src/jobs/jobs.service';
import { TermsService } from 'src/terms/terms.service';
import { UsersService } from 'src/users/users.service';
import { Employments } from './employments.entity';
import { EmploymentsService } from './employments.service';
export declare class EmploymentsController {
    private readonly employmentsService;
    private readonly usersService;
    private readonly jobsService;
    private readonly termsService;
    constructor(employmentsService: EmploymentsService, usersService: UsersService, jobsService: JobsService, termsService: TermsService);
    createOne(user: number, job: number, term: number, employment: Employments): Promise<Employments>;
}
