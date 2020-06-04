import { Injectable, NestMiddleware } from '@nestjs/common';
import { map } from 'rxjs/operators';
import { Request, Response } from 'express';
import { UserInfo } from '../module/interface/auth.interface';
import { AuthCookie } from '../module/class/AuthCookie.class';
import { AuthService } from '../module/auth.service';
import { loginUrl } from '../config/constants';

import cookieParser = require('cookie-parser');

@Injectable()
export class AuthMiddleware implements NestMiddleware {

  constructor(private readonly authService: AuthService) {}

  use(req: Request, res: Response, next: Function): void {
    cookieParser(
      false,
      { httpOnly: true }
    )(
      req,
      res,
      () => {
        this.authService.hasAuth(req)
          .subscribe(
            () => {
              next();
            },
            () => {
              this.authService.queryUserInfo(req)
                .subscribe(
                  (userInfo: UserInfo) => {
                    res.cookie('auth', new AuthCookie(userInfo));
                    next();
                  },
                  () => {
                    this.authService.queryUrl(req)
                      .pipe(
                        map(
                          url => encodeURIComponent(url)
                        )
                      )
                      .subscribe(
                        url => {
                          res.redirect(`${loginUrl}?service=${url}`);
                        }
                      );
                  }
                );
            }
          );
      }
    );
  }
}