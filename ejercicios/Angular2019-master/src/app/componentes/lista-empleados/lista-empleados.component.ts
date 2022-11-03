import { Component, OnInit } from '@angular/core';
import { EmpleadoService } from 'src/app/servicios/empleado.service';

@Component({
  selector: 'app-lista-empleados',
  templateUrl: './lista-empleados.component.html',
  styleUrls: ['./lista-empleados.component.css']
})
export class ListaEmpleadosComponent implements OnInit {
  empleados = [];
  constructor(private servicio:EmpleadoService) { 
    this.empleados = servicio.getEmpleados();
  }

  ngOnInit() {
  }

}
