import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { AuthService } from 'app/auth.service';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private auth: AuthService) {

  }
  canActivate(): boolean {
    return this.auth.estaAutenticado();
  }
}
