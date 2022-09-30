import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FindOperator, Repository } from 'typeorm';
import { Terms } from './terms.entity';

@Injectable()
export class TermsService {
    constructor(
        @InjectRepository(Terms)
        private TermsRepository: Repository<Terms>,
      ) {}

    async findOne(id: number | FindOperator<number>): Promise<Terms> {
        return await this.TermsRepository.findOne({ where: { id } });
    }
}
