import { Component, OnInit } from '@angular/core';
import { EmpleadoService } from 'src/app/servicios/empleado.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-barra-navegacion',
  templateUrl: './barra-navegacion.component.html',
  styles: []
})
export class BarraNavegacionComponent implements OnInit {

  constructor(private servicio:EmpleadoService,
    private router:Router) { }

  ngOnInit() {
  }

  buscar(componente){
    //console.log(evt.target.value);
    //console.log(this.servicio.buscarEmpleados(componente.value));
    this.router.navigate(['/buscar',componente.value]);
  }

}
