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
    this.getLocalidades()
    
  }
  ngAfterViewChecked(){

  }
  onClickSeeJson(){
    console.log(this.strClimaLocalidad)
  }
  clickMostrar(valor){
    this.posicionLocalidad=valor;
  }
  public getLocalidades(){
    this.SmnApiService.getLocalidadClima().subscribe(data=>{
      this.strClimaLocalidad=data
    })
  }
  topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  } 

  
}

