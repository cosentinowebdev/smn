import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormClimaComponent } from './form-clima/form-clima.component';
import { SmnApiService } from './smn-api.service';

@NgModule({
  declarations: [
    AppComponent,
    FormClimaComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [SmnApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
