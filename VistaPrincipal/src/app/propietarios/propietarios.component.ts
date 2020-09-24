import { Component, OnInit } from '@angular/core';
import {Propietario} from './propietario';
import {PROPIETARIOS} from './propietarios.json';

@Component({
  selector: 'app-propietarios',
  templateUrl: './propietarios.component.html',
  
})
export class PropietariosComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  propietarios:Propietario[]=PROPIETARIOS;

}
