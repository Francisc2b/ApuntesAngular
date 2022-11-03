import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//IMPORTO
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EpisodioComponent } from './componentes/episodio/episodio.component';
import { ShowComponent } from './componentes/show/show.component';
import { BuscarComponent } from './componentes/buscar/buscar.component';
import { ListaProgramasComponent } from './componentes/lista-programas/lista-programas.component';
import { ProgbusquedaComponent } from './componentes/progbusqueda/progbusqueda.component';

@NgModule({
  declarations: [
    AppComponent,
    EpisodioComponent,
    ShowComponent,
    BuscarComponent,
    ListaProgramasComponent,
    ProgbusquedaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    //METO EL MODULO
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
