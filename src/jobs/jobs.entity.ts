import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';

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
}
