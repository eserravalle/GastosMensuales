import { Component, OnInit, OnDestroy } from '@angular/core';
import { Gasto } from '../model/gasto';
import { GastoRepositoryService } from '../services/gasto-repository.service';
import { LoginService } from '../services/login.service';
import { MesService } from '../services/mes.service';

@Component({
  selector: 'app-gastos-del-mes',
  templateUrl: './gastos-del-mes.component.html',
  styleUrls: ['./gastos-del-mes.component.css']
})
export class GastosDelMesComponent implements OnInit, OnDestroy {

  gastosDelMes: Array<Gasto>;
  totalDeGastosDelMes: number;
  meses: Array<string>;
  mes: string;
  consultarButtonEnabled: boolean;
  isAlive: boolean = true;

  constructor(private gastoRepositoryService: GastoRepositoryService, private loginService: LoginService, private mesService: MesService) {
    this.gastosDelMes = new Array<Gasto>();
    this.totalDeGastosDelMes = 0;
    this.consultarButtonEnabled = false;
  }

  ngOnInit() {
    this.loginService.loggedIn.takeWhile(() => this.isAlive).subscribe((value) => {
      this.consultarButtonEnabled = value;
    });
    this.meses = this.mesService.obtenerListaDeMeses();
    this.mes = this.meses[0];
  }

  ngOnDestroy() {
    this.isAlive = false;
  }

  consultarGastosDelMes() {
    this.gastoRepositoryService.obtenerGastosDelMes(this.mes, false)
    .then((gastos) => {
      this.gastosDelMes = gastos;
      let sumaDeGastosDelMes = 0;
      this.gastosDelMes.forEach(gasto => {
        sumaDeGastosDelMes = sumaDeGastosDelMes + gasto.monto;
      });
      this.totalDeGastosDelMes = sumaDeGastosDelMes;
    })
    .catch((error) => alert(`${error.message} No se han podido recuperar los Gastos del Mes. ¡Intente nuevamente!`));
  }

  async eliminarGasto(gastoAEliminar: Gasto) {
    if (confirm("¿Quiere eliminar el gasto en " + gastoAEliminar.rubro + ", por $" + gastoAEliminar.monto + "?"))
    {
      let resultado: boolean = await this.gastoRepositoryService.eliminarGasto(gastoAEliminar);
      if (resultado === true) {
        this.consultarGastosDelMes();
      }
    }
  }
}
