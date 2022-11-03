import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TvmazeService {

  //1 injecto el httpclient
  //2 constante url a la api de tvmmaze
  URL = "http://api.tvmaze.com/"
  constructor(private http:HttpClient) { }

  getProximosEpisodios(){
    //3 para acceder a los proximos episodiostabla
    return this.http.get(`${this.URL}schedule`,{
      params : {
        country :"US",
        //4º para coger la fecha del dia
        date:`${new Date().toISOString().substring(0,10)}`
      }
    })
  }

  //5º mostrar el show
  getShow(id){
    return this.http.get(`${this.URL}shows/${id}`);
  }

  buscar(busqueda){
    // de esta manera gerneo toda la url
    return this.http.get(`${this.URL}search/shows?q=${busqueda}`);
    /* de esta manera utilizo params
    return this.http.get(`${this.URL}shows/search/shows`,{
      params : {q : busqueda}
  });*/
}
