import { Module } from '@nestjs/common';
import { JobsService } from './jobs.service';
import { JobsController } from './jobs.controller';
import { Jobs } from './jobs.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Jobs])],
  providers: [JobsService],
  controllers: [JobsController],
})
export class JobsModule {}
