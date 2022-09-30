import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToOne,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Employments } from '../employments/employments.entity';
import { IsInt, Min, Max, IsDate, Length, Equals, IsOptional } from 'class-validator';
import { SQL_TEXT_LIMIT } from '../utils/sql-type-limits';

@Entity()
export class Posts {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'tinyint' })
  @IsInt()
  @Min(0)
  @Max(10)
  rating: number;

  @Column({ type: 'varchar', length: 500 })
  @Length(0, 500)
  subject: string;

  @Column({ type: 'text' })
  @Length(0, SQL_TEXT_LIMIT)
  content: string;

  @CreateDateColumn()
  @IsDate()
  @IsOptional()
  createdDate: Date;

  @UpdateDateColumn()
  @IsDate()
  @IsOptional()
  updatedDate: Date;

  @OneToOne(() => Employments, employment => employment.post)
  employment: Employments;
}
