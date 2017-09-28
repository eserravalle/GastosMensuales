import { Component, OnInit } from '@angular/core';
import { Gasto } from '../model/gasto';
import { GastoRepositoryService } from '../services/gasto-repository.service';
import { RubroService } from '../services/rubro.service';
import { LoginService } from '../services/login.service';
import { DateFormatService } from '../services/date-format.service';

@Component({
  selector: 'app-nuevo-gasto',
  templateUrl: './nuevo-gasto.component.html',
  styleUrls: ['./nuevo-gasto.component.css']
})
export class NuevoGastoComponent implements OnInit {

  model: Gasto;
  rubros: Array<string>;
  crearButtonEnabled: boolean;
  mesActual: string;
  totalDelMesActual: string;

  constructor(
    private gastoRepository: GastoRepositoryService,
    private rubroService: RubroService,
    private loginService: LoginService,
    private dateFormatService: DateFormatService) {

    this.model = new Gasto(this.dateFormatService.getCurrentDateInYYYYMMDDFormat(), "", 0, "");
    this.rubros = this.rubroService.getAllRubros();
    this.crearButtonEnabled = false;
  }

  ngOnInit() {
    this.loginService.loggedIn.subscribe((value) => {
      this.crearButtonEnabled = value;
    });
    this.gastoRepository.montoTotalListo.subscribe((value) => {
      this.totalDelMesActual = value.toString();
    });
  }

  async onSubmit() {
    let resultado: boolean = await this.gastoRepository.agregarGasto(this.model);
    if (resultado === true) {
      this.mesActual = this.model.fecha.substr(0, 7);
      this.gastoRepository.calcularGastoTotalDelMes(this.mesActual);
      this.model = new Gasto(this.dateFormatService.getCurrentDateInYYYYMMDDFormat(), "", 0, "");
    }
  }
}
