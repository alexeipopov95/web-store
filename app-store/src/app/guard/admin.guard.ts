import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return true;
  }
  
}


/*
Si quieren saber mas de guardianes visiten aqui https://codingpotions.com/angular-seguridad.

CanActivate : Mira si el usuario puede acceder a una página determinada.
CanActivateChild :  Mira si el usuario puede acceder a las páginas hijas de una determinada ruta.
CanLoad :Sirve para evitar que la aplicación cargue los módulos perezosamente si el usuario no está autorizado a hacerlo.
*/