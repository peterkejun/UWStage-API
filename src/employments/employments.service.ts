import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Jobs } from 'src/jobs/jobs.entity';
import { Terms } from 'src/terms/terms.entity';
import { Users } from 'src/users/users.entity';
import { FindOperator, Repository } from 'typeorm';
import { Employments } from './employments.entity';

@Injectable()
export class EmploymentsService {
  constructor(
    @InjectRepository(Employments)
    private EmploymentsRepository: Repository<Employments>,
  ) {}

  async findOne(id: number | FindOperator<number>): Promise<Employments> {
    return await this.EmploymentsRepository.findOneBy({ id });
  }

  async createOne(employment: Employments, user: Users, job: Jobs, term: Terms): Promise<Employments> {
    employment.user = user;
    employment.job = job;
    employment.term = term;
    return await this.EmploymentsRepository.save(employment);
  } 
}
