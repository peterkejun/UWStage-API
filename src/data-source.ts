import { DataSource } from 'typeorm';
import { Company } from './company/company.entity';
import { Jobs } from './jobs/jobs.entity';

const getDatabasePort = (): number => {
  if (process.env.DB_PORT != null) {
    return parseInt(process.env.DB_PORT);
  }
  return 3306;
};
export const AppDataSource = new DataSource({
  type: 'mysql',
  host: process.env.DB_HOST || 'localhost',
  port: getDatabasePort(),
  username: process.env.DB_USER || 'uwstage',
  password: process.env.DB_PASSWORD || 'password',
  database: process.env.DB_DATABASE || 'uwstage',
  synchronize: true,
  logging: true,
  entities: [Company, Jobs],
  subscribers: [],
  migrations: ['migrations/*.ts'],
});
