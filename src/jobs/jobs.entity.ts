import { Company } from '../company/company.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany, ManyToOne } from 'typeorm';

@Entity()
export class Jobs {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 100 })
  title: string;

  @Column({ type: 'varchar', length: 20 })
  level: string;

  @Column({ type: 'int' })
  duration: number;

  @Column({ type: 'varchar', length: 50 })
  country: string;

  @ManyToOne(() => Company, company => company.jobs)
  company: Company;
}
