import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToMany,
  ManyToOne,
  ManyToMany,
  JoinTable,
} from 'typeorm';
import { Employments } from '../employments/employments.entity';

@Entity()
export class Users {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 100 })
  firstName;

  @Column({ type: 'varchar', length: 100 })
  lastName: string;

  @Column({ type: 'varchar', length: 50 })
  program: string;

  @Column({ type: 'varchar', length: 500 })
  email: string;

  @Column({ type: 'text' })
  password: string;

  @OneToMany(() => Employments, (employment) => employment.user)
  employments: Employments[];
}
