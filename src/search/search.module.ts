import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Company } from 'src/company/company.entity';
import { CompanyModule } from 'src/company/company.module';
import { CompanyService } from 'src/company/company.service';
import { Employments } from 'src/employments/employments.entity';
import { EmploymentsModule } from 'src/employments/employments.module';
import { EmploymentsService } from 'src/employments/employments.service';
import { Jobs } from 'src/jobs/jobs.entity';
import { JobsModule } from 'src/jobs/jobs.module';
import { JobsService } from 'src/jobs/jobs.service';
import { PostsModule } from 'src/posts/posts.module';

@Module({
    imports: [CompanyModule, JobsModule, TypeOrmModule.forFeature([Company, Jobs, Employments]), EmploymentsModule, PostsModule],
    providers: [CompanyService, JobsService, EmploymentsService],
})
export class SearchModule {}
