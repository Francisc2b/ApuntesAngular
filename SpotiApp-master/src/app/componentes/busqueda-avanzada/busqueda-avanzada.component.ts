import { Component, OnInit } from '@angular/core';
//importar Busqueda
import { Busqueda} from 'src/app/modelo/búsqueda';
import { SpotifyService } from 'src/app/servicios/spotify.service';

@Component({
  selector: 'app-busqueda-avanzada',
  templateUrl: './busqueda-avanzada.component.html',
  styles: []
})
export class BusquedaAvanzadaComponent implements OnInit {
//defino un objeto busqueda de tipo busqueda
private busqueda:Busqueda;
  //importo el servicio
  constructor(private servicio:SpotifyService) { }
    this.busqueda = new Busqueda("artist","","ES",10,0,"" );

  ngOnInit() {
  }

  //defino un objteo enviar
  enviar(form){
    this.servicio.busquedaAvanzada(this.busqueda)
    .suscribe(
      (datos) => console.log(datos)
    )
  }

}
