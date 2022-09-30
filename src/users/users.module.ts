import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Employments } from 'src/employments/employments.entity';
import { Users } from './users.entity';
import { UsersService } from './users.service';

@Module({
  imports: [TypeOrmModule.forFeature([Users, Employments])],
  providers: [UsersService],
  exports: [UsersService],
})
export class UsersModule {}
