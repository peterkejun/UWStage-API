import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Terms } from './terms.entity';
import { TermsService } from './terms.service';

@Module({
  imports: [TypeOrmModule.forFeature([Terms])],
  providers: [TermsService]
})
export class TermsModule {}
