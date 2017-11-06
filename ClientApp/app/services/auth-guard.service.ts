import { CanActivate } from '@angular/router';
import { Injectable } from '@angular/core';

import { AuthService } from './auth.service';

@Injectable()
export class AuthGuard implements CanActivate {
  
  constructor(protected auth: AuthService) { }

  public canActivate(): boolean {
    if (this.auth.isAuthenticated())
      return true;
    
    this.auth.login();

    return false;
  }
}
