import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Proyecto } from 'src/app/modelo/proyecto';
import { Empleado } from 'src/app/modelo/empleado';
import { EmpleadoService } from 'src/app/servicios/empleado.service';

@Component({
  selector: 'app-proyecto',
  templateUrl: './proyecto.component.html',
  styles: []
})
export class ProyectoComponent implements OnInit {
  @Input() proyecto:Proyecto;
  @Input() verMiembros:boolean = false;
  @Output() proyectoQuitado = new EventEmitter();
  
  constructor(private servicio:EmpleadoService) { 

  }

  ngOnInit() {
  }

  quitarEmpleado(empleado:Empleado){
    this.servicio.quitarEmpleadoProyecto(empleado,this.proyecto);
  }

  quitarProyecto(){
    this.proyectoQuitado.emit(this.proyecto);
  }

}
