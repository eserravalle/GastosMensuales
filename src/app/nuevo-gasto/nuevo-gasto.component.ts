import { Component, OnInit } from '@angular/core';
import { Gasto } from '../model/gasto';
import { GastoRepositoryService } from '../services/gasto-repository.service';
import { RubroService } from '../services/rubro.service';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-nuevo-gasto',
  templateUrl: './nuevo-gasto.component.html',
  styleUrls: ['./nuevo-gasto.component.css']
})
export class NuevoGastoComponent implements OnInit {

  model: Gasto;
  rubros: Array<string>;
  crearButtonEnabled: boolean;

  constructor(private gastoRepository: GastoRepositoryService, private rubroService: RubroService, private loginService: LoginService) {
    this.model = new Gasto(new Date(2017,8,20), "", 10, "");
    this.rubros = this.rubroService.getAllRubros();
    this.crearButtonEnabled = false;
  }

  ngOnInit() {
    this.loginService.loggedIn.subscribe((value) => {
      this.crearButtonEnabled = value;
    });
  }

  onSubmit() {
    this.gastoRepository.agregarGasto(this.model);
  }
}
