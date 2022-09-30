import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Employments } from './employments.entity';
import { EmploymentsService } from './employments.service';
import { EmploymentsController } from './employments.controller';
import { UsersService } from 'src/users/users.service';
import { JobsService } from 'src/jobs/jobs.service';
import { TermsService } from 'src/terms/terms.service';
import { Users } from 'src/users/users.entity';
import { Jobs } from 'src/jobs/jobs.entity';
import { Terms } from 'src/terms/terms.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Employments, Users, Jobs, Terms])],
  providers: [EmploymentsService, UsersService, JobsService, TermsService],
  controllers: [EmploymentsController]
})
export class EmploymentsModule {}
