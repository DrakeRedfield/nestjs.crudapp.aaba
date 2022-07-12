import { Module } from '@nestjs/common';
import { RepositoryModule } from 'src/db/postgres/repository';
import { CategoryController } from './category.controller';
import { CategoryService } from './services';

@Module({
  imports: [RepositoryModule],
  controllers: [CategoryController],
  providers: [CategoryService],
})
export class CategoryModule {}
