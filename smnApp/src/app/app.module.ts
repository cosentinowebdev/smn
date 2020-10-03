import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FormClimaComponent } from './form-clima/form-clima.component';
import { SmnApiService } from './smn-api.service';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { AutocompletarComponent } from './autocompletar/autocompletar.component';


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
    MatAutocompleteModule

  ],
  providers: [SmnApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
