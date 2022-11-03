import { Component, OnInit, Input } from '@angular/core';
import { Noticia } from 'src/app/modelo/noticia';
import { NoticiaService } from 'src/app/servicios/noticia.service';

@Component({
  selector: 'app-noticia',
  templateUrl: './noticia.component.html',
  styles: []
})
export class NoticiaComponent implements OnInit {
  //de esta manera la Noticia(interface) la paso aqui con nombre noticia
  //con el input recibe la notiica con el otro la posicion
  @Input() noticia:Noticia;
  @Input() pos:number;

  //para ahcer pruebas creo este constructor
  constructor(servicio:NoticiaService) {
    //cojo la noticia por la posicion
    this.noticia = servicio.getNoticiaPos(this.pos);

   }

  ngOnInit() {
  }

}
