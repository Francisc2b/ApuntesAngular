import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-episodio',
  templateUrl: './episodio.component.html',
  styles: [],
})
export class EpisodioComponent implements OnInit {

  //propiedad de entrada el episodio con cualquier informacion
  @Input()episodio:any;
  constructor() {
    
   }

  ngOnInit() {
    console.log(this.episodio);
  }

}
