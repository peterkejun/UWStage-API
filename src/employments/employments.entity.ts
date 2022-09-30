import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToMany,
  ManyToOne,
  ManyToMany,
  JoinTable,
  OneToOne,
  JoinColumn,
} from 'typeorm';
import { Users } from '../users/users.entity';
import { Terms } from '../terms/terms.entity';
import { Jobs } from '../jobs/jobs.entity';
import { Posts } from '../posts/posts.entity';

@Entity()
export class Employments {
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

  @ManyToOne(() => Users, (user) => user.employments)
  user: Users;

  @ManyToOne(() => Jobs, (job) => job.employments)
  job: Jobs;

  @ManyToOne(() => Terms, (term) => term.employments)
  term: Terms;

  @OneToOne(() => Posts, post => post.employment)
  @JoinColumn()
  post: Posts;
}
