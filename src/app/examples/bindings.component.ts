import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-bindings',
    templateUrl: './bindings.component.html'
})
export class BindingsComponent  {
   heading = 'Bindings Example';
   description = "Binding example component";
   step = 1;
   currentDate = new Date();
   userinfo:any;

   constructor(){
       this.userinfo = {name:'Indresh',address:'Noida'};
   }

}
