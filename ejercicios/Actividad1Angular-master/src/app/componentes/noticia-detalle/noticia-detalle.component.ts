import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Noticia } from 'src/app/modelo/noticia';
import { NoticiaService } from 'src/app/servicios/noticia.service';

@Component({
  selector: 'app-noticia-detalle',
  templateUrl: './noticia-detalle.component.html',
  styles: []
})
export class NoticiaDetalleComponent implements OnInit {
  //creo un objeto noticia de tipo Noticia
  noticia:Noticia;
  //inyectar el servicio ActivatedRoute
  constructor(ruta:ActivatedRoute,
    //cargo el servicio que es de tipo NoticiaService
    private servicio:NoticiaService,
    //servicio de rutado con un objeteo de tipo Router para volver por codigo
    private router:Router) {
    //al Observable nos suscribimos
    ruta.params.subscribe(
      //cuando los datos son correctos
      
      //busco la noticia = en el servicio obtengo la noticia por Posicion
        //obtieniendo desdee la posicion desde el archivo noticiacomponent.ts
      datos => {
        this.noticia = this.servicio.getNoticiaPos(datos.pos);
      },
      //cuando los datos no son correcto
      error => console.log(error)
    )  
  }

  ngOnInit() {
  }

  //metodo al que llamo para volver
  volver(){
    //navigate se pone a donde ir
    this.router.navigate(['']);
  }
}
