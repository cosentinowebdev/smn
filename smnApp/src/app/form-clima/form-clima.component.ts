import { Component, OnInit } from '@angular/core';
import { SmnApiService } from '../smn-api.service';

@Component({
  selector: 'app-form-clima',
  templateUrl: './form-clima.component.html',
  styleUrls: ['./form-clima.component.css']
})
export class FormClimaComponent implements OnInit {

  strClimaLocalidad = []
  constructor(private SmnApiService: SmnApiService) { 

  }

  ngOnInit() {
    //this.strClimaLocalidad = this.SmnApiService.getLocalidadClima()
    this.SmnApiService.getLocalidadClima().subscribe(data=>this.strClimaLocalidad=data)
  }
  onClickSeeJson(){
    console.log(this.strClimaLocalidad)
  }
  getValores(){
    console.log(this.strClimaLocalidad[0].name)
    //console.log(Object.getPrototypeOf(this.strClimaLocalidad[0]))
  }
}
