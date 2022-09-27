import { Controller } from '@nestjs/common';
import { DataSource } from 'typeorm';
import { Company } from './company.entity';
import { CompanyService } from './company.service';

@Controller('company')
export class CompanyController {
  constructor(
    private readonly companyService: CompanyService,
    private dataSource: DataSource,
  ) {}

  async createOne(company: Company) {
    await this.dataSource.transaction(async (manager) => {
      await manager.save(company);
    });
  }
}
