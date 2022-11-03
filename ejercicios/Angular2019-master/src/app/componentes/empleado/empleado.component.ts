import { Component, OnInit, Input } from '@angular/core';
import { Empleado } from 'src/app/modelo/empleado';
import { Router } from '@angular/router';

@Component({
  selector: 'app-empleado',
  templateUrl: './empleado.component.html',
  styleUrls: ['./empleado.component.css']
})
export class EmpleadoComponent implements OnInit {
  @Input() empleado:Empleado;
  //defino una propiedad ocultar
  @Input() ocultar:boolean = false;
  constructor(private router:Router) { 
  }

  ngOnInit() {
  }

  //defino este metodo
  verDetalles(){
    this.router.navigate(['/empleados',this.empleado.id]);
  }

}
