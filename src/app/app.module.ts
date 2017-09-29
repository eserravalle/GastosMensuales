import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AlertModule } from 'ngx-bootstrap';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { NuevoGastoComponent } from './nuevo-gasto/nuevo-gasto.component';
import { LoginComponent } from './login/login.component';
import { GastosDelMesComponent } from './gastos-del-mes/gastos-del-mes.component';

import { GastoRepositoryService } from './services/gasto-repository.service';
import { LoginService } from './services/login.service';
import { RubroService } from './services/rubro.service';
import { DateFormatService } from './services/date-format.service';
import { MesService } from './services/mes.service';

@NgModule({
  declarations: [
    AppComponent,
    NuevoGastoComponent,
    LoginComponent,
    GastosDelMesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AlertModule.forRoot(),
    AppRoutingModule
  ],
  providers: [
    GastoRepositoryService,
    LoginService,
    RubroService,
    DateFormatService,
    MesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
