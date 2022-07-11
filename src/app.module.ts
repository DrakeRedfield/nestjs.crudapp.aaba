import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppsModule } from './apps/apps.module';
import { createTypeOrmOptions } from './db/typeorm-config/typeorm-config.service';

@Module({
  imports: [
    AppsModule,
    ConfigModule.forRoot(),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: createTypeOrmOptions,
      inject: [ConfigService],
    }),
  ],
  providers: [],
})
export class AppModule {}
