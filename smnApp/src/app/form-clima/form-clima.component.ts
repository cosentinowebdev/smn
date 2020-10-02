import { Component, OnInit } from '@angular/core';
import { SmnApiService } from '../smn-api.service';

@Component({
  selector: 'ng',
  templateUrl: './form-clima.component.html',
  styleUrls: ['./form-clima.component.css']
})
export class FormClimaComponent implements OnInit {

  constructor(private SmnApiService: SmnApiService) { 

    
  }

  ngOnInit(): void {
  }

}
