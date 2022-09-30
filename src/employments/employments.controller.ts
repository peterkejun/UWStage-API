import { Body, Controller, HttpStatus, Post } from '@nestjs/common';
import { JobsService } from 'src/jobs/jobs.service';
import { TermsService } from 'src/terms/terms.service';
import { UsersService } from 'src/users/users.service';
import { makeHttpException, makeNotFoundMsg, throwIfNullish } from 'src/utils/http-response';
import { RequiredQuery } from 'src/utils/nest-decorators.ts/required-query.decorator';
import { Employments } from './employments.entity';
import { EmploymentsService } from './employments.service';

@Controller('employments')
export class EmploymentsController {
    constructor(
        private readonly employmentsService: EmploymentsService,
        private readonly usersService: UsersService,
        private readonly jobsService: JobsService,
        private readonly termsService: TermsService,
    ) {}

    @Post()
    async createOne(
        @RequiredQuery('user') user: number,
        @RequiredQuery('job') job: number,
        @RequiredQuery('term') term: number,
        @Body() employment: Employments,
    ): Promise<Employments> {
        const userEntity = await throwIfNullish(this.usersService.findOne(user), makeHttpException(HttpStatus.NOT_FOUND, makeNotFoundMsg('user')));
        const jobEntity = await throwIfNullish(this.jobsService.findOne(job), makeHttpException(HttpStatus.NOT_FOUND, makeNotFoundMsg('job')));
        const termEntity = await throwIfNullish(this.termsService.findOne(term), makeHttpException(HttpStatus.NOT_FOUND, makeNotFoundMsg('term')));
        return await this.employmentsService.createOne(employment, userEntity, jobEntity, termEntity);
    }
}
