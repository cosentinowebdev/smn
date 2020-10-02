import { Component, OnInit } from '@angular/core';
import { SmnApiService } from '../smn-api.service';

@Component({
  selector: 'ng',
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
}
