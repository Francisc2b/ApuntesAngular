import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TvmazeService } from 'src/app/servicio/tvmaze.service';

@Component({
  selector: 'app-lista-programas',
  templateUrl: './lista-programas.component.html',
  styles: []
})
export class ListaProgramasComponent implements OnInit {

  //guardo en una variable los programas que tengo
  private programas:any[];
            //para saber que ruta es        insertar el servico
  constructor(private ruta:ActivatedRoute private servicio : TvmazeService) {
    //susciribirse 
    this.ruta.params.subscribe(
      //coger la busqueda
      busqueda =>{
        //llamar al servicio        suscribirse
        this.servicio.buscar(params.busqueda).subscribe(
          //mostrar datos por pantalla
          //datos => console.log(datos)
          (datos: any[]) => {
            this.programas = datos;
            console.log(this.programas);
          },
        )
      }
    )
   }

  ngOnInit() {
  
  }
}
