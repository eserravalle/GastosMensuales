import { Component, OnInit } from '@angular/core';
import { Gasto } from '../model/gasto';
import { GastoRepositoryService } from '../services/gasto-repository.service';
import { LoginService } from '../services/login.service';
import { DateFormatService } from '../services/date-format.service';
import { RubroService } from '../services/rubro.service';

@Component({
  selector: 'app-templates-gastos',
  templateUrl: './templates-gastos.component.html',
  styleUrls: ['./templates-gastos.component.css']
})
export class TemplatesGastosComponent implements OnInit {

  templatesDeGastos: Array<Gasto>;
  model: Gasto;
  rubros: Array<string>;
  title: string;
  actualizando: boolean;
  authenticatedButtonsEnabled : boolean;

  constructor(private gastoRepositoryService: GastoRepositoryService, private loginService: LoginService, private dateFormatService: DateFormatService, private rubroService: RubroService) {
    this.templatesDeGastos = new Array<Gasto>();
    this.model = new Gasto(this.dateFormatService.getCurrentDateInYYYYMMDDFormat(), "", 0, "", "");
    this.rubros = this.rubroService.getAllRubros();
    this.cambiarModoFormulario(false);
    this.authenticatedButtonsEnabled = false;
  }

  private cambiarModoFormulario(estaActualizando: boolean) {
    if (estaActualizando === true) {
      this.title = "Actualice el Template: ";
      this.actualizando = true;
    } else {
      this.title = "Ingrese Nuevo Template: ";
      this.actualizando = false;
    }
  }

  ngOnInit() {
    this.loginService.loggedIn.subscribe((value) => {
      if (value === true) {
        this.obtenerTemplatesDeGastos();
      }
      this.authenticatedButtonsEnabled = value;
    });
  }

  obtenerTemplatesDeGastos() {
    this.gastoRepositoryService.obtenerTemplatesDeGastos()
    .then((templates) => {
      this.templatesDeGastos = templates;
    })
    .catch((error) => alert(`${error.message} No se han podido recuperar los Templates de Gastos. ¡Intente nuevamente!`));
  }

  async crearTemplateDeGasto() {
    let resultado: boolean = await this.gastoRepositoryService.agregarTemplateDeGasto(this.model);
    if (resultado === true) {
      this.model = new Gasto(this.dateFormatService.getCurrentDateInYYYYMMDDFormat(), "", 0, "", "");
      this.obtenerTemplatesDeGastos();
    }
  }

  async actualizarTemplateDeGasto() {
    let resultado: boolean = await this.gastoRepositoryService.actualizarTemplateDeGastos(this.model);
    if (resultado === true) {
      this.model = new Gasto(this.dateFormatService.getCurrentDateInYYYYMMDDFormat(), "", 0, "", "");
      this.cambiarModoFormulario(false);
      this.obtenerTemplatesDeGastos();
    }
  }

  async eliminarTemplateDeGasto(template: Gasto) {
    let resultado: boolean = await this.gastoRepositoryService.eliminarTemplateDeGasto(template);
    if (resultado === true) {
      this.obtenerTemplatesDeGastos();
    }
  }

  recuperarTemplateDeGasto(template: Gasto) {
    this.model = template;
    this.cambiarModoFormulario(true);
  }

  cancelarTemplateDeGasto() {
    this.model = new Gasto(this.dateFormatService.getCurrentDateInYYYYMMDDFormat(), "", 0, "", "");
    this.cambiarModoFormulario(false);
    this.obtenerTemplatesDeGastos();
  }
}
