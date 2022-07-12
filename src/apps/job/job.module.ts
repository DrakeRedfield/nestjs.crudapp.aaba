import { Module } from '@nestjs/common';
import { RepositoryModule } from 'src/db/postgres/repository';
import { JobController } from './job.controller';
import { JobService } from './services/job/job.service';

@Module({
  imports: [RepositoryModule],
  controllers: [JobController],
  providers: [JobService],
})
export class JobModule {}
