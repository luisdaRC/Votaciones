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
    this.propietarios=this.propietarioservice.getPropietarios();
  }
  

}
