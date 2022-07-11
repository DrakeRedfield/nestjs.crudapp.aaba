import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { DatabaseConfigModule } from './db';
import { AppsModule } from './apps/apps.module';

@Module({
  imports: [AppsModule, ConfigModule.forRoot(), DatabaseConfigModule],
  providers: [],
})
export class AppModule {}
