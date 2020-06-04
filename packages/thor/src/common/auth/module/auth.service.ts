import { Injectable, HttpService } from '@nestjs/common';
import { Request } from 'express';
import { Observable, of, throwError } from 'rxjs';
import { switchMap, mergeMap } from 'rxjs/operators';
import { VerifyError } from './class/VerifyError.class';
import { VerifyRes, AuthInfo, UserInfo } from './interface/auth.interface';
import { authUrl, validateUrl, subsystemsUrl } from '../config/constants';
import { camelCaseTranslator } from '../util/caseTranslator';

@Injectable()
export class AuthService {
  
  constructor(private readonly httpService: HttpService) {}

  queryUrl(req: Request): Observable<string> {
    return of(
      `${req.protocol}://${req.get('host')}${req.baseUrl}${req.path}`
    );
  }

  hasAuth(req: Request): Observable<VerifyRes> {
    try {
      const {
        auth: {
          userId,
          authToken,
        },
      }: { auth: AuthInfo } = req.cookies;
  
      return this.httpService.get(
        `${authUrl}/${userId}`,
        {
          headers: {
            'Content-Type': 'application/json',
            'X-Auth-Token': authToken,
            'X-User-Id': userId,
          },
        }
      ).pipe(
        switchMap(
          ({ data: verifyRes }) =>
            verifyRes.success
              ? of(verifyRes)
              : throwError(verifyRes)
        )
      );
    } catch (e) {
      const verifyRes = new VerifyError(e);

      return throwError(verifyRes);
    }
  }

  queryUserInfo(req: Request): Observable<UserInfo> {
    try {
      const { ticket } = req.query;

      if (!ticket) {
        throw (new Error('ticket needed!'));
      }
      return this.queryUrl(req)
        .pipe(
          mergeMap(
            url => this.httpService.get(
              `${validateUrl}?ticket=${ticket}&service=${url}`
            ).pipe(
              switchMap(
                ({ data: { data, msg, success }}) =>
                  success
                    ? of(camelCaseTranslator(data) as UserInfo)
                    : throwError({ msg, success })
              )
            )
          )
        );
    } catch (e) {
      const verifyRes = new VerifyError(e);

      return throwError(verifyRes);
    }
  }

  queryUserSubsystems(req: Request): Observable<UserInfo> {
    try {
      const {
        auth: {
          userId,
          authToken,
        },
      }: { auth: AuthInfo } = req.cookies;
  
      return this.httpService.get(
        `${subsystemsUrl}`,
        {
          headers: {
            'Content-Type': 'application/json',
            'X-Auth-Token': authToken,
            'X-User-Id': userId,
          },
        }
      ).pipe(
        switchMap(
          ({ data: { data, msg, success }}) =>
            success
              ? of(camelCaseTranslator(data) as UserInfo)
              : throwError({ msg, success })
        )
      );
    } catch (e) {
      const verifyRes = new VerifyError(e);

      return throwError(verifyRes);
    }
  }
}