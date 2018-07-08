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
    flag = false;
    msgclass='info';

   constructor(){
       this.userinfo = {name:'Indresh',address:'Noida'};
    //    setTimeout(()=>{
    //     this.msgclass = 'success';
    //     // this.flag=true;
    //    },5000);
   }

   sayHello(ev){
         console.log(ev);
       alert('Hi there');
       this.flag = !this.flag;
   }

   boxEvent(){
     
       this.msgclass = 'success';
   }

}
