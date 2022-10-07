import { HttpException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import e from 'express';
import { EmploymentsService } from 'src/employments/employments.service';
import { PostsService } from 'src/posts/posts.service';
import { DataSource, FindOperator, FindOptionsWhere, Repository, UpdateResult } from 'typeorm';
import { Jobs } from './jobs.entity';

@Injectable()
export class JobsService {
  constructor(
    @InjectRepository(Jobs)
    private JobsRepository: Repository<Jobs>,
    private employmentsService: EmploymentsService,
    private postService: PostsService,
    private dataSource: DataSource,
  ) {}

  async findAll(
    companyId: number = null,
  ): Promise<Jobs[]> {
    let query = this.JobsRepository.createQueryBuilder('jobs');
    if (companyId) {
      query = query.where('jobs.company = :companyId', { companyId });
    }
    return await query.getMany();
  }

  async findOne(id: number | FindOperator<number>): Promise<Jobs & {[key: string]: any}> {
    const job = await this.JobsRepository.findOneBy({ id });
    if (!job) return null;
    return {
      ...job,
      employment_count: await this.employmentsService.count(job),
      posts_count: await this.postService.countByJob(job),
      rating: await this.employmentsService.calculateAverageRating(job),
    };
  }

  findBy(options: FindOptionsWhere<Jobs>): Promise<Jobs[]> {
    return this.JobsRepository.findBy(options);
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
