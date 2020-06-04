import { Controller, Get, Req } from '@nestjs/common';
import { Request } from 'express';
import { Observable } from 'rxjs';
import { AppService } from './app.service';
import { AuthService, UserInfo } from './common/auth';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly authService: AuthService
  ) {}

  @Get('queryUserSubsystems')
  queryUserSubsystems(@Req() req: Request): Observable<UserInfo> {
    return this.authService.queryUserSubsystems(req);
  }
}
