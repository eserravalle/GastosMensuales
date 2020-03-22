import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NuevoGastoComponent } from './nuevo-gasto/nuevo-gasto.component';
import { GastosDelMesComponent } from './gastos-del-mes/gastos-del-mes.component';
import { TemplatesGastosComponent } from './templates-gastos/templates-gastos.component';

const routes: Routes = [
    { path: '', redirectTo: '/nuevoGasto', pathMatch: 'full' },
    { path: 'nuevoGasto', component: NuevoGastoComponent },
    { path: 'gastosDelMes', component: GastosDelMesComponent },
    { path: 'templates', component: TemplatesGastosComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
