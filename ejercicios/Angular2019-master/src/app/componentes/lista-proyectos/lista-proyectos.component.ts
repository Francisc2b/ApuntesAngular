import { Component, OnInit } from '@angular/core';
import { Proyecto } from 'src/app/modelo/proyecto';
import { Empleado } from 'src/app/modelo/empleado';
import { EmpleadoService } from 'src/app/servicios/empleado.service';

@Component({
  selector: 'app-lista-proyectos',
  templateUrl: './lista-proyectos.component.html',
  styles: []
})
export class ListaProyectosComponent implements OnInit {
  
  proyectos:Proyecto[];
  constructor(private servicio:EmpleadoService) { 
    this.proyectos = servicio.getProyectos();
  }
  

  ngOnInit() {
  }

  quitarProyecto(proyecto:Proyecto){
    this.servicio.quitarProyecto(proyecto);
  }

  

}
