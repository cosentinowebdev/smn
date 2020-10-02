import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ILocalidadClima } from './LocalidadClima';

@Injectable({
  providedIn: 'root'
})
export class SmnApiService {
  url: string = "https://ws.smn.gob.ar/map_items/weather"
  constructor(private http: HttpClient) { }

  getLocalidadClima(): Observable<ILocalidadClima[]>{
    
    return this.http.get<ILocalidadClima[]>(this.url)

  }


}
