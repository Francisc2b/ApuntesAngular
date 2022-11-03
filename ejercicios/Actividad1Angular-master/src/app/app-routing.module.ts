import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NoticiasComponent } from './componentes/noticias/noticias.component';
import { NoticiaDetalleComponent } from './componentes/noticia-detalle/noticia-detalle.component';


const routes: Routes = [
  //cuando no hay ningun camino que muestre NoticiasComponent
  {path:"", component:NoticiasComponent},
  //cuando el path sea detalle/:pos muesre lo correspondiente de NoticiaDetalleComponent
  {path:"detalle/:pos", component:NoticiaDetalleComponent},
  {path:"**", redirectTo:""}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
