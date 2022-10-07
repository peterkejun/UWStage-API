import { Module } from '@nestjs/common';
import { JobsService } from './jobs.service';
import { JobsController } from './jobs.controller';
import { Jobs } from './jobs.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EmploymentsModule } from 'src/employments/employments.module';
import { EmploymentsService } from 'src/employments/employments.service';
import { Employments } from 'src/employments/employments.entity';
import { Posts } from 'src/posts/posts.entity';
import { PostsModule } from 'src/posts/posts.module';
import { PostsService } from 'src/posts/posts.service';

@Module({
  imports: [TypeOrmModule.forFeature([Jobs, Employments, Posts]), EmploymentsModule, PostsModule],
  providers: [JobsService, EmploymentsService, PostsService],
  controllers: [JobsController],
  exports: [JobsService],
})
export class JobsModule {}
