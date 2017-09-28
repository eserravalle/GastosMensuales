import { Injectable } from '@angular/core';
import { Gasto } from '../model/gasto';
import * as firebase from 'firebase';

@Injectable()
export class GastoRepositoryService {

  constructor() {  }

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
}
