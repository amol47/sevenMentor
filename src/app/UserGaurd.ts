import { CanActivate } from "@angular/router";

export class UserGaurd implements CanActivate {
    canActivate() {
      return true;
    }
  }