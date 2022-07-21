import { Controller, Post, Request, UseGuards } from '@nestjs/common';
import { LocalAuthGuard } from '../../utils/guards/local-auth.guard';

@Controller('login')
export class LoginController {
  @UseGuards(LocalAuthGuard)
  @Post()
  login(@Request() request) {
    return request.user;
  }
}
