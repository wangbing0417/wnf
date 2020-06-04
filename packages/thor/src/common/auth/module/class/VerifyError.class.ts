import { VerifyRes } from '../interface/auth.interface';

export class VerifyError implements VerifyRes {
    readonly msg
  
    readonly success
  
    constructor(error: Error) {
      this.msg = error.message;
      this.success = false;
    }
}