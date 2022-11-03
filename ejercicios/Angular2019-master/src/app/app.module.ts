import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmpleadoComponent } from './componentes/empleado/empleado.component';
import { ListaEmpleadosComponent } from './componentes/lista-empleados/lista-empleados.component';
import { MiembroProyectoComponent } from './componentes/miembro-proyecto/miembro-proyecto.component';
import { ProyectoComponent } from './componentes/proyecto/proyecto.component';
import { ListaProyectosComponent } from './componentes/lista-proyectos/lista-proyectos.component';
import { BarraNavegacionComponent } from './componentes/barra-navegacion/barra-navegacion.component';
import { EmpleadoDetalleComponent } from './componentes/empleado-detalle/empleado-detalle.component';
import { ResultadoBusquedaComponent } from './componentes/resultado-busqueda/resultado-busqueda.component';

@NgModule({
  declarations: [
    AppComponent,
    EmpleadoComponent,
    ListaEmpleadosComponent,
    MiembroProyectoComponent,
    ProyectoComponent,
    ListaProyectosComponent,
    BarraNavegacionComponent,
    EmpleadoDetalleComponent,
    ResultadoBusquedaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
