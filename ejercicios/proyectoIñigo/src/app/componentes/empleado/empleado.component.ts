import { Component, OnInit, Input } from '@angular/core';
import { Empleado } from 'src/app/modelo/empleado';

@Component({
  selector: 'app-empleado',
  templateUrl: './empleado.component.html',
  styleUrls: ['./empleado.component.css']
})
export class EmpleadoComponent implements OnInit {
  @Input() empleado:Empleado;
  @Input() ocultar:boolean = false;
  constructor() { 
    this.empleado = new Empleado(1,"Juan","López","Contabilidad","V");
  }

  ngOnInit() {
  }

  cambiarVisibilidad(){
    this.ocultar = !this.ocultar;
  }

}
