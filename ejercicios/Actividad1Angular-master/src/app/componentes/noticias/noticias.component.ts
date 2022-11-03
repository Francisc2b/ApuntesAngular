import { Component, OnInit } from '@angular/core';
import { NoticiaService } from 'src/app/servicios/noticia.service';
import { Noticia } from 'src/app/modelo/noticia';

@Component({
  selector: 'app-noticias',
  templateUrl: './noticias.component.html',
  styles: []
})
export class NoticiasComponent implements OnInit {
  //matriz noticias de tipo Noticia
  noticias:Noticia[];
  //necesito un seerivicio para obtener todas las noticias
  constructor(servicio:NoticiaService) { 
    //obtengo todas las noticias del serivico y las guardo en la matriz noticias
    this.noticias = servicio.getNoticias();
  }

  ngOnInit() {
  }

}
