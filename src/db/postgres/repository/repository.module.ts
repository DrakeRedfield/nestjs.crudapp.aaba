import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { entitiesList } from '../config/typeorm-config.service';

@Module({
  imports: [TypeOrmModule.forFeature(entitiesList)],
  exports: [TypeOrmModule],
})
export class RepositoryModule {}
