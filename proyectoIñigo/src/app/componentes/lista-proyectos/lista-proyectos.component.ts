import { Component, OnInit } from '@angular/core';
import { Proyecto } from 'src/app/modelo/proyecto';
import { Empleado } from 'src/app/modelo/empleado';

@Component({
  selector: 'app-lista-proyectos',
  templateUrl: './lista-proyectos.component.html',
  styles: []
})
export class ListaProyectosComponent implements OnInit {
  empleados:Empleado[] = [];
  proyectos:Proyecto[] = [];
  constructor() { 
    this.empleados.push(new Empleado(1,"Juan","López","Contabilidad","V")),
    this.empleados.push(new Empleado(2,"Ana","Ginés","Administración","M")),
    this.empleados.push(new Empleado(3,"Carlos","Sanz","Contabilidad","V")),
    this.empleados.push(new Empleado(4,"Marta","Simón","Administración","M")),
    this.empleados.push(new Empleado(5,"Miguel","Fernández","Dirección","V"))
    this.proyectos.push(new Proyecto(1,"Análisis de Requerimientos",
      this.empleados[2],
      [this.empleados[1],this.empleados[4]]));
    this.proyectos.push(new Proyecto(2,"Desarrollo del código",
      this.empleados[4],
      [this.empleados[2],this.empleados[3]]));
    this.proyectos.push(new Proyecto(3,"Testeo de la Aplicación",
      this.empleados[1],
      [this.empleados[2],this.empleados[4]]));
  }
  

  ngOnInit() {
  }

}
