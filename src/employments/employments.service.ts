import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Jobs } from 'src/jobs/jobs.entity';
import { Terms } from 'src/terms/terms.entity';
import { Users } from 'src/users/users.entity';
import { DataSource, FindOperator, Repository } from 'typeorm';
import { Employments } from './employments.entity';

@Injectable()
export class EmploymentsService {
  constructor(
    @InjectRepository(Employments)
    private EmploymentsRepository: Repository<Employments>,
    private dataSource: DataSource,
  ) {}

  async findOne(id: number | FindOperator<number>): Promise<Employments> {
    return await this.EmploymentsRepository.findOneBy({ id });
  }

  async count(job: Jobs): Promise<number> {
    return await this.EmploymentsRepository.count({
      where: {
        job,
      }
    })
  }

  async calculateAverageRating(job: Jobs): Promise<number> {
    const results = await this.dataSource.query(`select avg(p.rating) avg from jobs j join employments e on j.id = e.jobId and j.id = ?
    join posts p on p.id = e.postId
    group by j.id`, [job.id]);
    return Number(results[0].avg);
  }

  async createOne(employment: Employments, user: Users, job: Jobs, term: Terms): Promise<Employments> {
    employment.user = user;
    employment.job = job;
    employment.term = term;
    return await this.EmploymentsRepository.save(employment);
  } 
}
