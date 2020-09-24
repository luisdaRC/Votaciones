import { Injectable } from '@angular/core';
import { PROPIETARIOS } from './propietarios.json'
import {Propietario} from './propietario'
@Injectable({
  providedIn: 'root'
})
export class PropietarioService {

  constructor() { }

  getPropietarios():Propietario[]{
    return PROPIETARIOS;
  }
}
