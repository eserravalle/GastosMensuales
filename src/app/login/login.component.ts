import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username: string;
  password: string;
  userLoggedIn: boolean;

  constructor(private loginService: LoginService) {
    this.username = "";
    this.password = "";
    this.userLoggedIn = false;
  }

  ngOnInit() {
    if (!this.loginService.loggedIn) {
      return;
    }
    
    this.loginService.loggedIn.subscribe((value) => {
      this.userLoggedIn = value;
      if (this.userLoggedIn) {
        this.username = "";
        this.password = "";
      }
    });
  }

  onLoginClick() {
    this.loginService.login(this.username.trim(), this.password);
  }

  onLogoutClick() {
    this.loginService.logout();
  }
}
