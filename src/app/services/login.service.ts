import { Injectable } from '@angular/core';
import * as firebase from 'firebase';

@Injectable()
export class LoginService {

  constructor() {
    let config = {
        apiKey: "AIzaSyBVEF3EcqG36N7zHZbsYJ1vmxTydp5qlxc",
        authDomain: "gastos-mensuales-575b8.firebaseapp.com",
        databaseURL: "https://gastos-mensuales-575b8.firebaseio.com/",
        storageBucket: "gastos-mensuales-575b8.appspot.com"
    };
    firebase.initializeApp(config);
  }

  login(username: string, password: string) {
    firebase.auth().signInWithEmailAndPassword(username, password)
      .catch(function(error) {
        alert(`${error.message} Las credenciales no son válidas. ¡Intente nuevamente!`);
      });
  }

  logout() {
    firebase.auth().signOut()
      .catch(function(error) {
        alert(`${error.message} No ha podido salir de la aplicación. ¡Intente nuevamente!`);
      });
  }

  verifyUser(username: string): boolean {
    let authUser = firebase.auth().currentUser;
    if (authUser && authUser.email == username) {
        return true;
    } else {
        return false;
    }
  }
}