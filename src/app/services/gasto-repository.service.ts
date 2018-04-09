import { Injectable } from '@angular/core';
import { Gasto } from '../model/gasto';
import * as firebase from 'firebase';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class GastoRepositoryService {

  montoTotalListo = new BehaviorSubject<number>(0);
  listaDeGastosDelMes = new Array<Gasto>();
  listaDeTemplatesDeGastos = new Array<Gasto>();

  constructor() {
    this.montoTotalListo.next(0);
  }

  async agregarGasto(gasto: Gasto): Promise<boolean> {
    try {
      let dbRef = firebase.database().ref('gastos/' + gasto.fecha.substr(0, 7));
      let newPost = dbRef.push();

      await newPost.set({
          fecha: gasto.fecha,
          rubro: gasto.rubro,
          monto: gasto.monto,
          notas: gasto.notas,
          id: newPost.key
      });
      gasto.id = newPost.key;

      return true;
    }
    catch (error) {
      alert(`${error.message} No ha podido crear el Gasto. ¡Intente nuevamente!`)
      return false;
    }
  }
  
  async eliminarGasto(gastoAEliminar: Gasto): Promise<boolean> {
    try {
      let dbRef = firebase.database().ref('gastos/' + gastoAEliminar.fecha.substr(0, 7));
      await dbRef.child(gastoAEliminar.id).remove();

      return true;
    }
    catch (error) {
      alert(`${error.message} No ha podido eliminar el Gasto. ¡Intente nuevamente!`)
      return false;
    }
  }

  calcularGastoTotalDelMes(mes: string) {
    let dbRef = firebase.database().ref('gastos/' + mes);
    let query = dbRef.orderByKey();
    query.once(
      'value',
      function(snapshot) {
        let montoTotal: number = 0;
        snapshot.forEach(function(childSnapshot) {
          montoTotal = montoTotal + childSnapshot.val().monto;
          return false; // This means: keep iterating!
        });
        this.montoTotalListo.next(montoTotal);
      },
      function(error) {
        this.montoTotalListo.next(0);
      },
      this
    );
  }

  async obtenerGastosDelMes(mes: string, sortAscending: boolean = false): Promise<Array<Gasto>> {
    this.montoTotalListo.next(0);
    let dbRef = firebase.database().ref('gastos/' + mes);
    let query = dbRef.orderByChild('fecha');
    await query.once(
      'value',
      function(snapshot, sortAscending) {
        let gastos: Array<Gasto> = new Array<Gasto>();
        snapshot.forEach(function(childSnapshot) {
          let gasto: Gasto = new Gasto(
            childSnapshot.val().fecha,
            childSnapshot.val().rubro,
            childSnapshot.val().monto,
            childSnapshot.val().notas,
            childSnapshot.val().id
          );
          gastos.push(gasto);
          return false; // This means: keep iterating!
        });
        
        if (sortAscending) {
          this.listaDeGastosDelMes = gastos;
        } else {
          // This is needed because, as of November 11 2017,
          // there is no way in firebase API to retrieve orderByChild descending
          let gastosDesc: Array<Gasto> = new Array<Gasto>();
          for(let i = gastos.length - 1; i >= 0; i--)
          {
            gastosDesc.push(gastos[i]);
          }
          this.listaDeGastosDelMes = gastosDesc;
        }

      },
      function(error) {
        this.listaDeGastosDelMes = new Array<Gasto>();
      },
      this
    );
    return this.listaDeGastosDelMes;
  }

  async agregarTemplateDeGasto(template: Gasto): Promise<boolean> {
    try {
      let dbRef = firebase.database().ref('templates/');
      let newPost = dbRef.push();

      await newPost.set({
          fecha: template.fecha,
          rubro: template.rubro,
          monto: template.monto,
          notas: template.notas,
          id: newPost.key
      });
      template.id = newPost.key;

      return true;
    }
    catch (error) {
      alert(`${error.message} No ha podido crear el Template de Gasto. ¡Intente nuevamente!`)
      return false;
    }
  }

  async actualizarTemplateDeGastos(template: Gasto): Promise<boolean> {
    try {
      let dbRef = firebase.database().ref('templates/');
      await dbRef.child(template.id).update({
        rubro: template.rubro,
        monto: template.monto,
        notas: template.notas
      });

      return true;
    }
    catch (error) {
      alert(`${error.message} No ha podido actualizar el Template de Gasto. ¡Intente nuevamente!`)
      return false;
    }
  }

  async eliminarTemplateDeGasto(template: Gasto): Promise<boolean> {
    try {
      let dbRef = firebase.database().ref('templates/');
      await dbRef.child(template.id).remove();

      return true;
    }
    catch (error) {
      alert(`${error.message} No ha podido eliminar el Template de Gasto. ¡Intente nuevamente!`)
      return false;
    }
  }

  async obtenerTemplatesDeGastos(): Promise<Array<Gasto>> {
    let dbRef = firebase.database().ref('templates/');
    let query = dbRef.orderByKey();
    await query.once(
      'value',
      function(snapshot) {
        let templatesGastos: Array<Gasto> = new Array<Gasto>();
        snapshot.forEach((childSnapshot): boolean => {
          let template: Gasto = new Gasto(
            childSnapshot.val().fecha,
            childSnapshot.val().rubro,
            childSnapshot.val().monto,
            childSnapshot.val().notas,
            childSnapshot.val().id
          );
          templatesGastos.push(template);
          return false; // This means: keep iterating!
        });
        this.listaDeTemplatesDeGastos = templatesGastos;
      },
      function(error) {
        this.listaDeTemplatesDeGastos =  new Array<Gasto>();
      },
      this
    );
    return this.listaDeTemplatesDeGastos;
  }
}