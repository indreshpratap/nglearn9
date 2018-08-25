import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-core-login',
   template:`
   <div>
   <app-ui-confirm confirmMessage="Do you want to login?"></app-ui-confirm>
        <h3>Login</h3>
        <input type="text" [(ngModel)]="username" palceholder="username">
        <input type="password" palceholder="password">
        <p-calendar [(ngModel)]="dob"></p-calendar>
        Selected DOB is: {{dob}}
        <p-checkbox name="groupname" value="val1" [(ngModel)]="selectedValues"></p-checkbox>
        <button>Login</button>
   </div>
   `
})
export class LoginComponent  {
   username;
   dob;
   selectedValues;
}
