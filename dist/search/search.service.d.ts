import { CompanyService } from 'src/company/company.service';
import { JobsService } from 'src/jobs/jobs.service';
import { DataSource } from 'typeorm';
export declare class SearchService {
    private dataSource;
    private companyService;
    private jobsService;
    constructor(dataSource: DataSource, companyService: CompanyService, jobsService: JobsService);
    search(query: string): Promise<any>;
}
