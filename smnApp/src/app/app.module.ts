
import { AppComponent } from './app.component';
import { FormClimaComponent } from './form-clima/form-clima.component';
import { AutocompletarComponent } from './autocompletar/autocompletar.component';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { SmnApiService } from './smn-api.service';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatListModule} from '@angular/material/list';

@NgModule({
  declarations: [
    AppComponent,
    FormClimaComponent,
    AutocompletarComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatCardModule,
    MatButtonModule,
    MatListModule

  ],
  providers: [SmnApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
