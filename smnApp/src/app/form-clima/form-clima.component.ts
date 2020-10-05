import { Component, OnInit } from '@angular/core';
import { SmnApiService } from '../smn-api.service';

@Component({
  selector: 'app-form-clima',
  templateUrl: './form-clima.component.html',
  styleUrls: ['./form-clima.component.css']
})
export class FormClimaComponent implements OnInit {

  public strClimaLocalidad = []
  public posicionLocalidad:number
  //----------------------------
  
  public page: number = 1;
  public totalPages: number;
  public numLocs: number;
  private numResults: number = 10;
  

  constructor(private SmnApiService: SmnApiService) { 

  }

  ngOnInit() {
    this.getLocalidadesByPage(this.page)

    //this.strClimaLocalidad = this.SmnApiService.getLocalidadClima()
    //this.SmnApiService.getLocalidadClima().subscribe(data=>{this.strClimaLocalidad=data})
    /*
    this._shopService.listShops(page).subscribe(data =>{
        this.shops = data;
        this.numShops = data.length;
        this.totalPages = Math.round(this.numShops / this.numResults);
    });
    */

  }
  onClickSeeJson(){
    console.log(this.strClimaLocalidad)
  }
  getValores(){
    console.log(this.strClimaLocalidad[0]?.name) 
    //console.log(Object.getPrototypeOf(this.strClimaLocalidad[0]))
  }
  clickMostrar(valor){
    this.posicionLocalidad=valor;
  }
  public getLocalidadesByPage(page:number){
    this.SmnApiService.getLocalidadClima().subscribe(data=>{
      this.strClimaLocalidad=data
    })
  }
}
