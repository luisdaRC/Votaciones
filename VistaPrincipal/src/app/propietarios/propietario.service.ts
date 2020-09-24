import { Injectable } from '@angular/core';
import { PROPIETARIOS } from './propietarios.json';
import { Propietario} from './propietario';
import { of, Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class PropietarioService {

  constructor() { }

  getPropietarios():Observable<Propietario[]>{
    return of(PROPIETARIOS);
  }
}
