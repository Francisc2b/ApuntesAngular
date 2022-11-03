import { Component, OnInit, Input } from '@angular/core';
import { Empleado } from 'src/app/modelo/empleado';
import { ActivatedRoute } from '@angular/router';
import { EmpleadoService } from 'src/app/servicios/empleado.service';

@Component({
  selector: 'app-empleado-detalle',
  templateUrl: './empleado-detalle.component.html',
  styles: []
})
export class EmpleadoDetalleComponent implements OnInit {
  @Input() empleado:Empleado;
  empleados = [];
  constructor(private ruta:ActivatedRoute,
    private servicio:EmpleadoService) { 
    ruta.params.subscribe(
      param => {
        this.empleado = this.servicio.getEmpleado(param.id);
      },
      err => console.log("Error : " + err)
    );
  }

  

  ngOnInit() {
  }

}
