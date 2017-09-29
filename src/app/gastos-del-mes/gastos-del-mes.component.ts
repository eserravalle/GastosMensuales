import { Component, OnInit } from '@angular/core';
import { Gasto } from '../model/gasto';
import { GastoRepositoryService } from '../services/gasto-repository.service';

@Component({
  selector: 'app-gastos-del-mes',
  templateUrl: './gastos-del-mes.component.html',
  styleUrls: ['./gastos-del-mes.component.css']
})
export class GastosDelMesComponent implements OnInit {

  gastosDelMes: Array<Gasto>;

  constructor(private gastoRepositoryService: GastoRepositoryService) {
    this.gastosDelMes = new Array<Gasto>();
  }

  ngOnInit() {
    this.gastoRepositoryService.obtenerGastosDelMes('2017-09')
    .then((gastos) => this.gastosDelMes = gastos)
    .catch((error) => alert(`${error.message} No han podido recuperar los Gastos del Mes. ¡Intente nuevamente!`));
  }
}
