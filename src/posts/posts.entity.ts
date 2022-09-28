import { Entity, Column, PrimaryGeneratedColumn, OneToMany, ManyToOne, ManyToMany, JoinTable } from 'typeorm';
import { Employments } from '../employments/employments.entity';

@Entity()
export class Posts {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'tinyint' })
  rating: number;

  @Column({ type: 'varchar', length: 500 })
  subject: string

  @Column({ type: 'text' })
  content: string

  @ManyToOne(() => Employments, employment => employment.posts)
  employment: Employments;
}
