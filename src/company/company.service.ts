import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DataSource, FindOperator, Repository, UpdateResult } from 'typeorm';
import { Company } from './company.entity';

@Injectable()
export class CompanyService {
  constructor(
    @InjectRepository(Company)
    private CompanyRepository: Repository<Company>,
    private dataSource: DataSource,
  ) {}

  findAll(): Promise<Company[]> {
    return this.CompanyRepository.find();
  }

  findOne(id: number | FindOperator<number>): Promise<Company> {
    return this.CompanyRepository.findOneBy({ id });
  }

  async remove(id: number): Promise<void> {
    await this.CompanyRepository.delete(id);
  }

  async createOne(company: Company): Promise<Company> {
    return await this.CompanyRepository.save(company);
  }

  updateOne(id: number, company: Company): Promise<UpdateResult> {
    return new Promise<UpdateResult>((resolve, reject) => {
      this.dataSource.transaction(async (manager) => {
        const existingCompany = await manager.findOne(Company, { where: { id }})
        if (existingCompany == null) {
          reject({
            code: 400,
            msg: `Company with id ${id} not found.`,
          })
        } 
        resolve(await manager.update(Company, { id }, company));
      })
    })
  }

}
