import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Employments } from 'src/employments/employments.entity';
import { DataSource, FindOperator, Repository } from 'typeorm';
import { Posts } from './posts.entity';

@Injectable()
export class PostsService {
  constructor(
    @InjectRepository(Posts)
    private PostsRepository: Repository<Posts>,
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

  async remove(id: number): Promise<void> {
    await this.PostsRepository.delete(id);
  }

  async createOne(post: Posts, employment: Employments): Promise<Posts> {
    post.employment = employment;
    return await this.PostsRepository.save(post);
  }
}
