import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { AuthService } from './auth.service';
import { LocalStrategy } from '../../strategies/local.strategy';
import { UsersModule } from '../users/users.module';

@Module({
  exports: [UsersModule, PassportModule, LocalStrategy],
  imports: [UsersModule, PassportModule],
  providers: [AuthService, LocalStrategy],
})
export class AuthModule { }
