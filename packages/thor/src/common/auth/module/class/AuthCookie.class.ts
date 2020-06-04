import { AuthInfo, UserInfo } from '../interface/auth.interface';

export class AuthCookie implements AuthInfo {
  readonly userId

  readonly authToken

  constructor(userInfo: UserInfo) {
    this.userId = userInfo.userId;
    this.authToken = userInfo.authToken;
  }
}