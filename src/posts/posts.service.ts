import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Employments } from 'src/employments/employments.entity';
import { Jobs } from 'src/jobs/jobs.entity';
import { DataSource, FindOperator, Repository } from 'typeorm';
import { Posts } from './posts.entity';

@Injectable()
export class PostsService {
  constructor(
    @InjectRepository(Posts)
    private PostsRepository: Repository<Posts>,
    private dataSource: DataSource,
  ) {}

  async findAll(
    jobId: number = null,
    termId: number = null,
  ): Promise<Posts[]> {
    let query = this.PostsRepository.createQueryBuilder('posts')
        .leftJoin('posts.employment', 'employments', );
    if (jobId) {
        query = query.where('employments.job = :jobId', { jobId });
    }
    if (termId) {
        query = query.where('employments.term = :termId', { termId });
    }
    query = query.select('posts.*');
    return await query.getMany();
  }

  findOne(id: number | FindOperator<number>): Promise<Posts> {
    return this.PostsRepository.findOneBy({ id });
  }

  async countByJob(job: Jobs): Promise<number> {
    const results = await this.dataSource.query(
      `select count(p.id) c from posts p join employments e on e.postId = p.id
      join jobs j on e.jobId = j.id
      where j.id = ?`, [job.id],
    );
    return parseInt(results[0].c);
  }

  async remove(id: number): Promise<void> {
    await this.PostsRepository.delete(id);
  }

  async createOne(post: Posts, employment: Employments): Promise<Posts> {
    post.employment = employment;
    return await this.PostsRepository.save(post);
  }
}
