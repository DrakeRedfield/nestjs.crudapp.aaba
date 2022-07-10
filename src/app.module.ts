import { Module } from '@nestjs/common';
import { AppsModule } from './apps/apps.module';

@Module({
  imports: [AppsModule],
  providers: [],
})
export class AppModule {}
