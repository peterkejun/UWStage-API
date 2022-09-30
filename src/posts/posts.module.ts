import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Employments } from 'src/employments/employments.entity';
import { EmploymentsService } from 'src/employments/employments.service';
import { Terms } from 'src/terms/terms.entity';
import { Users } from 'src/users/users.entity';
import { PostsController } from './posts.controller';
import { Posts } from './posts.entity';
import { PostsService } from './posts.service';

@Module({
  imports: [TypeOrmModule.forFeature([Posts, Employments, Terms, Users])],
  controllers: [PostsController],
  providers: [PostsService, EmploymentsService],
})
export class PostsModule {}
