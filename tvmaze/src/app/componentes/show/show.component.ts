import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TvmazeService } from 'src/app/servicio/tvmaze.service';

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styles: []
})
export class ShowComponent implements OnInit {
  //para cuadno se busca un show a traves del id
 private programa;
  constructor(ruta: ActivatedRoute, servicio: TvmazeService) {
    //Observable al que nos suscribimos y devuele la lista de parametros
    ruta.params.subscribe(
      params =>{
        //console.log(params.id);
        servicio.getShow(params.id).subscribe(
          datos => {
            this.programa= datos;
          //
          console.log(this.programa);
          }
        )
        
      }
    )
  }

  ngOnInit() {
  }

}

