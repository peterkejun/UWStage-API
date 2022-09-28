import { Company } from '../company/company.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany, ManyToOne, ManyToMany, JoinTable } from 'typeorm';
import { Terms } from '../terms/terms.entity';

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

  @ManyToMany(() => Terms, term => term.jobs)
  @JoinTable()
  terms: Terms[];
}
