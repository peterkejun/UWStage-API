import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DataSource, FindOperator, Repository, UpdateResult } from 'typeorm';
import { Jobs } from './jobs.entity';

@Injectable()
export class JobsService {
  constructor(
    @InjectRepository(Jobs)
    private JobsRepository: Repository<Jobs>,
    private dataSource: DataSource,
  ) {}

  findAll(): Promise<Jobs[]> {
    return this.JobsRepository.find();
  }

  findOne(id: number | FindOperator<number>): Promise<Jobs> {
    return this.JobsRepository.findOneBy({ id });
  }

  async remove(id: number): Promise<void> {
    await this.JobsRepository.delete(id);
  }

  async createOne(Jobs: Jobs): Promise<Jobs> {
    return await this.JobsRepository.save(Jobs);
  }

  updateOne(id: number, job: Jobs): Promise<UpdateResult> {
    return new Promise<UpdateResult>((resolve, reject) => {
      this.dataSource.transaction(async (manager) => {
        const existingJobs = await manager.findOne(Jobs, {
          where: { id },
        });
        if (existingJobs == null) {
          reject({
            code: 400,
            msg: `Jobs with id ${id} not found.`,
          });
        }
        resolve(await manager.update(Jobs, { id }, job));
      });
    });
  }
}
