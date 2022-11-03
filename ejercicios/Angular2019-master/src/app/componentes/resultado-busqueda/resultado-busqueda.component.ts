import { Component, OnInit } from '@angular/core';
import { Empleado } from 'src/app/modelo/empleado';
import { ActivatedRoute } from '@angular/router';
import { EmpleadoService } from 'src/app/servicios/empleado.service';

@Component({
  selector: 'app-resultado-busqueda',
  templateUrl: './resultado-busqueda.component.html',
  styleUrls: ['./resultado-busqueda.component.css']
})
export class ResultadoBusquedaComponent implements OnInit {
  private empleados:Empleado[];
  constructor(private rutaActiva:ActivatedRoute,
    private servicio:EmpleadoService) {
    this.rutaActiva.params.subscribe(
      params => {
        this.empleados = this.servicio.buscarEmpleados(params.texto);
        console.log(this.empleados);
      }
    )
  }

  ngOnInit() {
  }

}
