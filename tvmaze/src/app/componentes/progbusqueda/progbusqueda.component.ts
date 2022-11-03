import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-progbusqueda',
  templateUrl: './progbusqueda.component.html',
  styles: []
})
export class ProgbusquedaComponent implements OnInit {
  // defino la prpoiedad de entrada qe va a ser programa
  @Input() programa;
  constructor() { }

  ngOnInit() {
  }

}
