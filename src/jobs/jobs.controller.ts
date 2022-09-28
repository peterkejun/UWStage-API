import {
  Body,
  Controller,
  Delete,
  Get,
  HttpStatus,
  Param,
  ParseIntPipe,
  Post,
  UseGuards,
} from '@nestjs/common';
import { makeHttpException } from 'src/utils/http-response';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { UpdateResult } from 'typeorm';
import { Jobs } from './jobs.entity';
import { JobsService } from './jobs.service';

@Controller('jobs')
export class JobsController {
  constructor(private readonly jobsService: JobsService) {}

  @Get()
  public findAll(): Promise<Jobs[]> {
    return this.jobsService.findAll();
  }

  @Get(':id')
  public async findOne(@Param('id', ParseIntPipe) id: number): Promise<Jobs> {
    const job = await this.jobsService.findOne(id);
    if (job == null) {
      throw makeHttpException(HttpStatus.NOT_FOUND);
    }
    return job;
  }

  @UseGuards(JwtAuthGuard)
  @Post()
  public createOne(@Body() company: Jobs): Promise<Jobs> {
    return this.jobsService.createOne(company);
  }

  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  public deleteOne(@Param('id', ParseIntPipe) id: number): Promise<void> {
    return this.jobsService.remove(id);
  }

  @UseGuards(JwtAuthGuard)
  @Post(':id')
  public updateOne(
    @Param('id', ParseIntPipe) id: number,
    @Body() company: Jobs,
  ): Promise<UpdateResult> {
    return this.jobsService.updateOne(id, company);
  }
}
