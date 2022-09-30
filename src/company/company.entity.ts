import { Jobs } from '../jobs/jobs.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';

@Entity()
export class Company {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @OneToMany(() => Jobs, (job) => job.company)
  jobs: Jobs[];
}
