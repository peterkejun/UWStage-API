import { UpdateResult } from 'typeorm';
import { Company } from './company.entity';
import { CompanyService } from './company.service';
export declare class CompanyController {
    private readonly companyService;
    constructor(companyService: CompanyService);
    findAll(): Promise<Company[]>;
    findOne(id: number): Promise<Company>;
    createOne(company: Company): Promise<Company>;
    deleteOne(id: number): Promise<void>;
    updateOne(id: number, company: Company): Promise<UpdateResult>;
}
