import { HttpException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FindOperator, Repository } from 'typeorm';
import { Users } from './users.entity';

@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(Users)
        private UsersRepository: Repository<Users>,
      ) {}

    async findOne(id: number | FindOperator<number>): Promise<Users> {
        return await this.UsersRepository.findOne({ where: { id } });
    }
    
}
