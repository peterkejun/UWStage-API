import { Jobs } from '../jobs/jobs.entity';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToMany,
  ManyToOne,
  ManyToMany,
} from 'typeorm';
import { Employments } from '../employments/employments.entity';

@Entity()
export class Terms {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 10 })
  season: string;

  @Column({ type: 'varchar', length: 4 })
  year: string;

  @ManyToMany(() => Jobs, (job) => job.terms)
  jobs: Jobs[];

  @OneToMany(() => Employments, employment => employment.term)
  employments: Employments[];
}
