import { InjectRepository } from '@nestjs/typeorm';
import { FindOperator, Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { Users } from './users.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(Users)
    private UsersRepository: Repository<Users>,
  ) {}

  async findOneById(id: number): Promise<Users> {
    return await this.UsersRepository.findOne({ where: { id } });
  }

  async findOneByEmail(email: string): Promise<Users> {
    return await this.UsersRepository.findOne({ where: { email } });
  }
}
