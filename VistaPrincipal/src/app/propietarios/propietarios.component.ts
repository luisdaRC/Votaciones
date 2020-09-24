import { Component, OnInit } from '@angular/core';
import {Propietario} from './propietario';
import {PropietarioService} from './propietario.service';

@Component({
  selector: 'app-propietarios',
  templateUrl: './propietarios.component.html',
  
})
export class PropietariosComponent implements OnInit {
  propietarios:Propietario[]
  constructor(private propietarioservice:PropietarioService ) { }

  ngOnInit() {
    this.propietarioservice.getPropietarios().subscribe(
      propietarios=>this.propietarios=propietarios
      /**
       * Es lo mismo que:
       * function(propietarios){ this.propietarios=propietarios}
       * 
       * cuando hay varios parametros
       * (param1,param2, ...) => { some code}
       */
    );
  }
  

}
