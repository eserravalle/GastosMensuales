import { Component, OnInit } from '@angular/core';
import { Gasto } from '../model/gasto';
import { GastoRepositoryService } from '../services/gasto-repository.service';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-gastos-del-mes',
  templateUrl: './gastos-del-mes.component.html',
  styleUrls: ['./gastos-del-mes.component.css']
})
export class GastosDelMesComponent implements OnInit {

  gastosDelMes: Array<Gasto>;
  meses: Array<string>;
  mes: string;
  consultarButtonEnabled: boolean;

  constructor(private gastoRepositoryService: GastoRepositoryService, private loginService: LoginService) {
    this.gastosDelMes = new Array<Gasto>();
    this.meses = ['2017-08', '2017-09'];
    this.mes = '2017-09';
    this.consultarButtonEnabled = false;
  }

  ngOnInit() {
    this.loginService.loggedIn.subscribe((value) => {
      this.consultarButtonEnabled = value;
    });
  }

  consultarGastosDelMes() {
    this.gastoRepositoryService.obtenerGastosDelMes(this.mes)
    .then((gastos) => this.gastosDelMes = gastos)
    .catch((error) => alert(`${error.message} No se han podido recuperar los Gastos del Mes. ¡Intente nuevamente!`));
  }
}
