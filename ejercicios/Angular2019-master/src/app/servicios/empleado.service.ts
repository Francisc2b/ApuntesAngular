import { Injectable } from '@angular/core';
import { Empleado } from '../modelo/empleado';
import { Proyecto } from '../modelo/proyecto';

@Injectable({
  providedIn: 'root'
})
export class EmpleadoService {

  private empleados:Empleado[] = [];
  private proyectos:Proyecto[] = [];
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

  getEmpleados(){
    return this.empleados;
  }

  getProyectos(){
    return this.proyectos;
  }

  quitarProyecto(proyecto){
    const index = this.proyectos.indexOf(proyecto);
    this.proyectos.splice(index,1);
  }

  quitarEmpleadoProyecto(empleado,proyecto){
    const indexProy = this.proyectos.indexOf(proyecto);
    const index = this.proyectos[indexProy].empleados.indexOf(empleado);
    this.proyectos[indexProy].empleados.splice(index,1);
  }

  getEmpleado(id:number){
    
    return this.empleados.find(
      (e) => e.id == id
    );
    
  }

  buscarEmpleados(nombre){
    return this.empleados.filter(
      empleado => empleado.nombreCompleto().toLowerCase()
        .includes(nombre.toLowerCase())
    )
  }

}
