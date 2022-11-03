import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListaEpisodiosComponent } from './componentes/lista-episodios/lista-episodios.component';
import { ShowComponent } from './componentes/show/show.component';
import { ListaProgramasComponent } from './componentes/lista-programas/lista-programas.component';


const routes: Routes = [
  // ruta cuando no hay nada seleccionado
  {path:'', component:ListaEpisodiosComponent},
  // ruta para ir a un determinado show segun id
  {path:'show/:id', component:ShowComponent},
  //al pulsar buscar pasar lo que hay enel cuadro de busqueda
  {path:'buscar/:busqueda', component:ListaProgramasComponent},
  //para ir a cualquier otro
  {path:'**', redirectTo:''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
