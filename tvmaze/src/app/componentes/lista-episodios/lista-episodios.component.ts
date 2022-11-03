import { Component, OnInit } from '@angular/core';
import { TvmazeService } from 'src/app/servicio/tvmaze.service';

@Component({
  selector: 'app-lista-episodios',
  templateUrl: './lista-episodios.component.html',
  styles: []
})
export class ListaEpisodiosComponent implements OnInit {

  //creo la propiedad episodios matriz que usare para guardar los episodios
  private episodios:any[];
  //inyecto el servicio
  constructor(private servicio: TvmazeService) {

    //creo un observable al que me surscribo
    servicio.getProximosEpisodios().subscribe(
      //obtengo los datos y los guardo en episodios
      (datos:any) => {
        this.episodios = datos ;
      },
      //en caso de que haya errores
      (error) => console.log(error)
    );
   }

  ngOnInit() {
  }

}
