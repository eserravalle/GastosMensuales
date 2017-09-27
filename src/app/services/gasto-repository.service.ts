import { Injectable } from '@angular/core';
import { Gasto } from '../model/gasto';
import * as firebase from 'firebase';

@Injectable()
export class GastoRepositoryService {

  constructor() {  }

  agregarGasto(gasto: Gasto) {
    let dbRef = firebase.database().ref('gastos/');
    let newPost = dbRef.push();
    newPost.set({
        fecha: gasto.fecha,
        rubro: gasto.rubro,
        monto: gasto.monto,
        notas: gasto.notas,
        id: newPost.key
    })
    .catch(function(error) {
      alert(`${error.message} No ha podido crear el Gasto. ¡Intente nuevamente!`)
    });
}
}
