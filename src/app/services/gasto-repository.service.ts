import { Injectable } from '@angular/core';
import { Gasto } from '../model/gasto';
import * as firebase from 'firebase';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class GastoRepositoryService {

  montoTotalListo = new BehaviorSubject<number>(0);
  listaDeGastosDelMes = new Array<Gasto>();

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

      return true;
    }
    catch (error) {
      alert(`${error.message} No ha podido crear el Gasto. ¡Intente nuevamente!`)
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

  async obtenerGastosDelMes(mes: string): Promise<Array<Gasto>> {
    let dbRef = firebase.database().ref('gastos/' + mes);
    let query = dbRef.orderByKey();
    await query.once(
      'value',
      function(snapshot) {
        let gastos: Array<Gasto> = new Array<Gasto>();
        snapshot.forEach(function(childSnapshot) {
          let gasto: Gasto = new Gasto(
            childSnapshot.val().fecha,
            childSnapshot.val().rubro,
            childSnapshot.val().monto,
            childSnapshot.val().notas
          );
          gastos.push(gasto);
          return false; // This means: keep iterating!
        });
        this.listaDeGastosDelMes = gastos;
      },
      function(error) {
        this.listaDeGastosDelMes = new Array<Gasto>();
      },
      this
    );
    return this.listaDeGastosDelMes;
  }
}