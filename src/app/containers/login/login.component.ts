import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
  //  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username;
  password;

  doLogin(){
    console.log(this.username,this.password);
  }
}
