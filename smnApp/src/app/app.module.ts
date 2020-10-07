
import { AppComponent } from './app.component';
import { FormClimaComponent } from './form-clima/form-clima.component';
import { AutocompletarComponent } from './autocompletar/autocompletar.component';
import { SmnApiService } from './smn-api.service';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { RouterModule,Routes } from '@angular/router';
import {MatTooltipModule} from '@angular/material/tooltip';


const appRoutes: Routes = [
  {path: 'lista', component: FormClimaComponent},
  {path: 'home', component: HomeComponent},
  {path: '', redirectTo:'home',pathMatch:'full'}
]

@NgModule({
  declarations: [
    AppComponent,
    FormClimaComponent,
    AutocompletarComponent,
    HomeComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatCardModule,
    MatButtonModule,
    MatListModule,
    RouterModule.forRoot(appRoutes),
    MatTooltipModule

  ],
  providers: [SmnApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
