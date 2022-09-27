import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FindOperator, Repository } from 'typeorm';
import { Company } from './company.entity';

@Injectable()
export class CompanyService {
  constructor(
    @InjectRepository(Company)
    private CompanyRepository: Repository<Company>,
  ) {}

  findAll(): Promise<Company[]> {
    return this.CompanyRepository.find();
  }

  findOne(id: number | FindOperator<number>): Promise<Company> {
    return this.CompanyRepository.findOneBy({ id });
  }

  async remove(id: string): Promise<void> {
    await this.CompanyRepository.delete(id);
  }
}
