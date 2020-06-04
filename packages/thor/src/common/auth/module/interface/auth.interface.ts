export interface VerifyRes {
  readonly msg: string;
  readonly success: boolean;
}

export interface AuthInfo {
  readonly userId: string;
  readonly authToken: string;
}

export interface UserInfo {
  readonly accountNo: string;
  readonly accountType: string;
  readonly authToken: string;
  readonly avatar: string;
  readonly createdAt: string;
  readonly deactivated: boolean;
  readonly email: string;
  readonly emailAlias: string;
  readonly mobile: string;
  readonly name: string;
  readonly permissions: Array<string>,
  readonly primaryAccountNo: string;
  readonly snsUserId: string;
  readonly thumbAvatar: string;
  readonly updatedAt: string;
  readonly userId: string;
  readonly userNameAlias: string;
}

export interface UserSubSystem {
  readonly name: string;
  readonly alias: string;
  readonly isAdmin: boolean;
}