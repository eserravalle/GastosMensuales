import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'

import { AppComponent } from './app.component';
import { NuevoGastoComponent } from './nuevo-gasto/nuevo-gasto.component';
import { LoginComponent } from './login/login.component';

import { GastoRepositoryService } from './services/gasto-repository.service';
import { LoginService } from './services/login.service';
import { RubroService } from './services/rubro.service';
import { DateFormatService } from './services/date-format.service';

@NgModule({
  declarations: [
    AppComponent,
    NuevoGastoComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [
    GastoRepositoryService,
    LoginService,
    RubroService,
    DateFormatService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
