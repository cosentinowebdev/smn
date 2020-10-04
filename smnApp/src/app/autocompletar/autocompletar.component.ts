import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-autocompletar',
  templateUrl: './autocompletar.component.html',
  styleUrls: ['./autocompletar.component.css']
})
export class AutocompletarComponent implements OnInit {

  verClima = new FormControl();
  @Input() strClimaLocalidad;
  @Output() hijoEvento = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }
  enviarEvento(valor){
    console.log(valor);
    this.hijoEvento.emit(valor)
  }

}
