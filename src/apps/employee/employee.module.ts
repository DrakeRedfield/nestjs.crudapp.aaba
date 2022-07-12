import { Module } from '@nestjs/common';
import { RepositoryModule } from 'src/db/postgres/repository';
import { EmployeeController } from './employee.controller';
import { EmployeeService } from './service';

@Module({
  imports: [RepositoryModule],
  controllers: [EmployeeController],
  providers: [EmployeeService],
})
export class EmployeeModule {}
