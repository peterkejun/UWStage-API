import {
  Body,
  Controller,
  Delete,
  Get,
  HttpException,
  HttpStatus,
  Param,
  ParseIntPipe,
  Post,
  UseGuards,
} from '@nestjs/common';
import { makeHttpException } from 'src/utils/http-response';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { UpdateResult } from 'typeorm';
import { Company } from './company.entity';
import { CompanyService } from './company.service';

@Controller('company')
export class CompanyController {
  constructor(private readonly companyService: CompanyService) {}

  @Get()
  public findAll(): Promise<Company[]> {
    return this.companyService.findAll();
  }

  @Get(':id')
  public async findOne(
    @Param('id', ParseIntPipe) id: number,
  ): Promise<Company> {
    const company = await this.companyService.findOne(id);
    if (company == null) {
      throw makeHttpException(HttpStatus.NOT_FOUND);
    }
    return company;
  }

  @UseGuards(JwtAuthGuard)
  @Post()
  public createOne(@Body() company: Company): Promise<Company> {
    return this.companyService.createOne(company);
  }

  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  public deleteOne(@Param('id', ParseIntPipe) id: number): Promise<void> {
    return this.companyService.remove(id);
  }

  @UseGuards(JwtAuthGuard)
  @Post(':id')
  public updateOne(
    @Param('id', ParseIntPipe) id: number,
    @Body() company: Company,
  ): Promise<UpdateResult> {
    return this.companyService.updateOne(id, company);
  }
}
