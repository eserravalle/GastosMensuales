import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class LoginService {

  loggedIn = new BehaviorSubject<boolean>(false);

  constructor() {
    let config = {
      apiKey: "AIzaSyBVEF3EcqG36N7zHZbsYJ1vmxTydp5qlxc",
      authDomain: "gastos-mensuales-575b8.firebaseapp.com",
      databaseURL: "https://gastos-mensuales-575b8.firebaseio.com/",
      storageBucket: "gastos-mensuales-575b8.appspot.com"
    };
    firebase.initializeApp(config);

    this.loggedIn.next(false);
  }

  async login(username: string, password: string) {
    try {
      await firebase.auth().signInWithEmailAndPassword(username, password);
      this.loggedIn.next(true);
    }
    catch (error) {
      alert(`${error.message} Las credenciales no son válidas. ¡Intente nuevamente!`);
    }
  }

  async logout() {
    try {
      await firebase.auth().signOut();
      this.loggedIn.next(false);
    }
    catch (error) {
      alert(`${error.message} No ha podido salir de la aplicación. ¡Intente nuevamente!`);
    }
  }
}