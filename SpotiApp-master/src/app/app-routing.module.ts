import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './componentes/home/home.component';
import { ArtistaComponent } from './componentes/artista/artista.component';
import { BusquedaComponent } from './componentes/busqueda/busqueda.component';
//importar el componente busqueda avanzadacompnentt
import { BusquedaAvanzadaComponent } from './componentes/busqueda-avanzada/busqueda-avanzada.component';

const routes: Routes = [
  //rutas a las que ir
  {path:'home', component:HomeComponent},
  {path:'artista/:id', component:ArtistaComponent},
  {path:'busqueda', component:BusquedaComponent},
  //ruta a busquedaAvanzada
  {path:'busquedaAvanzada', component:BusquedaAvanzadaComponent},
  {path:'**', redirectTo:'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
