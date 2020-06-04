import { Controller, Get, Req } from '@nestjs/common';
import { Request } from 'express';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
import { VerifyRes, UserInfo } from './interface/auth.interface';

@Controller('authApi')
export class AuthController {
  constructor(private readonly authService: AuthService) {}
  
  @Get('queryUrl')
  queryUrl(@Req() req: Request): Observable<string> {
    return this.authService.queryUrl(req);
  }
  
  @Get('hasAuth')
  hasAuth(@Req() req: Request): Observable<VerifyRes> {
    return this.authService.hasAuth(req);
  }
  
  @Get('queryUserInfo')
  queryUserInfo(@Req() req: Request): Observable<UserInfo> {
    return this.authService.queryUserInfo(req);
  }
  
  @Get('queryUserPermissions')
  queryUserSubsystems(@Req() req: Request): Observable<UserInfo> {
    return this.authService.queryUserSubsystems(req);
  }
}
