import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NuevoGastoComponent } from './nuevo-gasto/nuevo-gasto.component';
import { GastosDelMesComponent } from './gastos-del-mes/gastos-del-mes.component';

const routes: Routes = [
    { path: '', redirectTo: '/nuevoGasto', pathMatch: 'full' },
    { path: 'nuevoGasto', component: NuevoGastoComponent },
    { path: 'gastosDelMes', component: GastosDelMesComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }