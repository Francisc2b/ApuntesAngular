import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styles: []
})
export class BuscarComponent implements OnInit {
  //mediante el router navego de un compennte a otro
  constructor(private router:Router) { }

  ngOnInit() {
  }

  // recibe el componente y el evento
  buscar(cmp,evt){
    //console.log(cmp.evt);
    this.router.navigate(['/buscar',cmp.value]);
  }

}
