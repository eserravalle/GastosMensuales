import { Injectable } from '@angular/core';
import { Gasto } from '../model/gasto';
import * as firebase from 'firebase';

@Injectable()
export class GastoRepositoryService {

  constructor() {
    // Set the configuration for your app
    // TODO: Replace with your project's config object
    var config = {
      apiKey: "AIzaSyBVEF3EcqG36N7zHZbsYJ1vmxTydp5qlxc",
      authDomain: "gastos-mensuales-575b8.firebaseapp.com",
      databaseURL: "https://gastos-mensuales-575b8.firebaseio.com/",
      storageBucket: "gastos-mensuales-575b8.appspot.com"
    };
    firebase.initializeApp(config);
    firebase.auth().signInWithEmailAndPassword('', '')  //Let the user enter the credentials
      .catch(function(error) {
        alert(`${error.message} Unable to login. Try again!`);
      });
}

  agregarGasto(gasto: Gasto) {
    let dbRef = firebase.database().ref('gastos/');
    let newPost = dbRef.push();
    newPost.set ({
        fecha: gasto.fecha,
        rubro: gasto.rubro,
        monto: gasto.monto,
        notas: gasto.notas,
        id: newPost.key
    });         
  }
}
