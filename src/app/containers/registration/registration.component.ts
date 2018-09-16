import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-registration',
    templateUrl: './registration.component.html',
   // styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {
    email="test@gmail.com";
  doRegister(form){
      if(form.valid){
          let data = form.value;
          console.log(data);
      }
    //   console.log(form);
  }
  toggleForm(form){
      if(form.enabled){
          form.form.disable();
      }else {
          form.form.enable();
      }
  }
}
