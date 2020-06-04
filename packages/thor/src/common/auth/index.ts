import { RequestMethod } from '@nestjs/common';
import { RouteInfo } from '@nestjs/common/interfaces';

export { AuthCookie, VerifyError } from './module/class';
export { VerifyRes, AuthInfo, UserInfo } from './module/interface/auth.interface';

export { AuthModule } from './module/auth.module';
export { AuthController } from './module/auth.controller';
export { AuthService } from './module/auth.service';
export { AuthMiddleware } from './middleware/auth.middleware';

export const authRoute: RouteInfo = {
  path: 'authApi/(.*)',
  method: RequestMethod.ALL,
};