import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'

import { AppComponent } from './app.component';
import { NuevoGastoComponent } from './nuevo-gasto/nuevo-gasto.component';

import { GastoRepositoryService } from './services/gasto-repository.service';

@NgModule({
  declarations: [
    AppComponent,
    NuevoGastoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [
    GastoRepositoryService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
