import { FindOperator, Repository } from 'typeorm';
import { Terms } from './terms.entity';
export declare class TermsService {
    private TermsRepository;
    constructor(TermsRepository: Repository<Terms>);
    findOne(id: number | FindOperator<number>): Promise<Terms>;
}
