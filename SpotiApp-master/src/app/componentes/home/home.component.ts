import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'src/app/servicios/spotify.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {
  private albums:any[];
                //1º inyectar el servicio
  constructor(private servicio:SpotifyService) { 
    /*this.servicio.getNovedades().then(
      datos => console.log(datos)
    )*/
  }

  async ngOnInit() 
  {   
    let datos:any = await this.servicio.getNovedades();
    this.albums = datos.albums.items;
    console.log(this.albums);
  }

}
