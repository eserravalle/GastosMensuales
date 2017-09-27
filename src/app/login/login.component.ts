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
  }

  onLoginClick() {
    this.loginService.login(this.username, this.password);
    this.userLoggedIn = this.loginService.verifyUser(this.username);
  }

  onLogoutClick() {
    this.loginService.logout();
    this.userLoggedIn = this.loginService.verifyUser(this.username);
  }
}
