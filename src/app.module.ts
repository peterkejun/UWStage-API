import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CompanyModule } from './company/company.module';

const shouldOrmSynchronize = (): boolean => {
  return process.env.TARGET == 'DEV';
};

const getDatabasePort = (): number => {
  if (process.env.DB_PORT != null) {
    return parseInt(process.env.DB_PORT);
  }
  return 3306;
};

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.DB_HOST || 'localhost',
      port: getDatabasePort(),
      username: process.env.DB_USER || 'uwstage',
      password: process.env.DB_PASSWORD || 'password',
      database: process.env.DB_DATABASE || 'uwstage',
      entities: [],
      migrations: ['src/migrations/*.ts'],
      autoLoadEntities: true,
      synchronize: shouldOrmSynchronize(),
    }),
    CompanyModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
