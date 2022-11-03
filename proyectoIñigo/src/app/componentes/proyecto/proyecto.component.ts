import { Component, OnInit, Input } from '@angular/core';
import { Proyecto } from 'src/app/modelo/proyecto';
import { Empleado } from 'src/app/modelo/empleado';
import { ConsoleReporter } from 'jasmine';

@Component({
  selector: 'app-proyecto',
  templateUrl: './proyecto.component.html',
  styles: []
})
export class ProyectoComponent implements OnInit {
  @Input() proyecto:Proyecto;
  @Input() verMiembros:boolean = false;
  empleados:Empleado[] = [];
  constructor() { 
    this.empleados.push(new Empleado(1,"Juan","López","Contabilidad","V")),
    this.empleados.push(new Empleado(2,"Ana","Ginés","Administración","M")),
    this.empleados.push(new Empleado(3,"Carlos","Sanz","Contabilidad","V")),
    this.empleados.push(new Empleado(4,"Marta","Simón","Administración","M")),
    this.empleados.push(new Empleado(5,"Miguel","Fernández","Dirección","V"))
    this.proyecto = new Proyecto(1,"Análisis de Requerimientos",
      this.empleados[2],
      [this.empleados[1],this.empleados[4]]);
  }

  ngOnInit() {
  }

  quitarEmpleado(empleado:Empleado){
    const index = this.proyecto.empleados.indexOf(empleado);
    this.proyecto.empleados.splice(index,1);
  }

}
