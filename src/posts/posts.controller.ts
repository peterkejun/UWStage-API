import { Body, Controller, DefaultValuePipe, Get, HttpStatus, Optional, ParseIntPipe, Post, Query } from '@nestjs/common';
import { EmploymentsService } from 'src/employments/employments.service';
import { makeHttpException } from 'src/utils/http-response';
import { RequiredQuery } from 'src/utils/nest-decorators.ts/required-query.decorator';
import { Posts } from './posts.entity';
import { PostsService } from './posts.service';

@Controller('posts')
export class PostsController {
    constructor(
        private readonly postsService: PostsService,
        private readonly employmentsService: EmploymentsService,
    ) {}

    @Get()
    async findAll(
        @Query('job', new DefaultValuePipe(0), ParseIntPipe) job: number,
        @Query('term', new DefaultValuePipe(0), ParseIntPipe) term: number,
    ): Promise<Posts[]> {
        return await this.postsService.findAll(job, term)
    }

    @Post()
    async createOne(
        @RequiredQuery('employment', ParseIntPipe) employment: number,
        @Body() post: Posts,
    ): Promise<Posts> {
        const employmentEntity = await this.employmentsService.findOne(employment);
        if (employmentEntity == null) {
            throw makeHttpException(HttpStatus.BAD_REQUEST, 'employment not found');
        }
        return await this.postsService.createOne(post, employmentEntity);
    }

}
