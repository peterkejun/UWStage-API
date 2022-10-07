import { Injectable } from '@nestjs/common';
import { CompanyService } from 'src/company/company.service';
import { JobsService } from 'src/jobs/jobs.service';
import { DataSource, Like } from 'typeorm';

@Injectable()
export class SearchService {
    constructor(
        private dataSource: DataSource,
        private companyService: CompanyService,
        private jobsService: JobsService,
    ) {}

    async search(query: string): Promise<any> {
        const companies = await this.companyService.findBy({
            name: Like(`%${query}%`),
        })
        const jobs = await this.jobsService.findBy({
            title: Like(`%${query}%`),
        })
        return {
            companies,
            jobs,
        }
    }

}
