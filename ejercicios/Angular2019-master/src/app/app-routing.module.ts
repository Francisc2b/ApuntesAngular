import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListaEmpleadosComponent } from './componentes/lista-empleados/lista-empleados.component';
import { ListaProyectosComponent } from './componentes/lista-proyectos/lista-proyectos.component';
import { EmpleadoDetalleComponent } from './componentes/empleado-detalle/empleado-detalle.component';
import { ResultadoBusquedaComponent } from './componentes/resultado-busqueda/resultado-busqueda.component';


const routes: Routes = [
  { path: 'empleados', component: ListaEmpleadosComponent },
  { path: 'empleados/:id', component: EmpleadoDetalleComponent },
  { path: 'proyectos', component: ListaProyectosComponent },
  { path: 'buscar/:texto', component: ResultadoBusquedaComponent},
  { path: '**', redirectTo:'empleados'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
