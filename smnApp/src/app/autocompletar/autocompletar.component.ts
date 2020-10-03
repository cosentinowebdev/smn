import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-autocompletar',
  templateUrl: './autocompletar.component.html',
  styleUrls: ['./autocompletar.component.css']
})
export class AutocompletarComponent implements OnInit {

  verClima = new FormControl();
  @Input() strClimaLocalidad;

  constructor() { }

  ngOnInit(): void {
  }

}
