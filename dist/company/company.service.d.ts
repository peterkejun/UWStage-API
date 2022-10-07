import { DataSource, FindOperator, FindOptionsWhere, Repository, UpdateResult } from 'typeorm';
import { Company } from './company.entity';
export declare class CompanyService {
    private CompanyRepository;
    private dataSource;
    constructor(CompanyRepository: Repository<Company>, dataSource: DataSource);
    findAll(): Promise<Company[]>;
    findOne(id: number | FindOperator<number>): Promise<Company>;
    findBy(options: FindOptionsWhere<Company>): Promise<Company[]>;
    remove(id: number): Promise<void>;
    createOne(company: Company): Promise<Company>;
    updateOne(id: number, company: Company): Promise<UpdateResult>;
}
