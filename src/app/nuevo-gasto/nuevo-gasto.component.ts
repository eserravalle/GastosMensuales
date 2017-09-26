import { Component, OnInit } from '@angular/core';
import { Gasto } from '../model/gasto';
import { GastoRepositoryService } from '../services/gasto-repository.service';

@Component({
  selector: 'app-nuevo-gasto',
  templateUrl: './nuevo-gasto.component.html',
  styleUrls: ['./nuevo-gasto.component.css']
})
export class NuevoGastoComponent implements OnInit {

  model: Gasto;

  constructor(private gastoRepository: GastoRepositoryService) { }

  ngOnInit() {
    this.model = new Gasto(new Date(), "", 0, "");
  }

  onSubmit() {
    this.gastoRepository.agregarGasto(this.model);
  }
}
