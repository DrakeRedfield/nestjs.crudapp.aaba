import { Module } from '@nestjs/common';
import { TypeORMPostgresConfigModule } from './postgres/config';

@Module({
  imports: [TypeORMPostgresConfigModule],
  providers: [],
})
export class DatabaseConfigModule {}
