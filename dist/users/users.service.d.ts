import { Repository } from 'typeorm';
import { Users } from './users.entity';
export declare class UsersService {
    private UsersRepository;
    constructor(UsersRepository: Repository<Users>);
    findOneById(id: number): Promise<Users>;
    findOneByEmail(email: string): Promise<Users>;
}
