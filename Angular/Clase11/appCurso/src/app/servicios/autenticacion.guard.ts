import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, CanLoad } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { AutenticacionService } from './autenticacion.service';


@Injectable()
export class AutenticacionGuard implements CanActivate, CanLoad {
  
  constructor(private auth: AutenticacionService){}

  canActivate(): boolean{
    return this.auth.autenticado
  }

  canLoad(): boolean {
    return this.auth.autenticado
    //return this.canActivate()
  }
}
