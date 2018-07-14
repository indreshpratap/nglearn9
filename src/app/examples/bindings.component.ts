import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-bindings',
    templateUrl: './bindings.component.html'
})
export class BindingsComponent {
    heading = 'Bindings Example';
    description = "Binding example component";
    step = 1;
    currentDate = new Date();
    userinfo: any;
    flag = false;
    msgclass = 'info';
    type_cls='alert';

    conditions = {
        bold:false,
        italic:false,
        height:false,
        color:false
    };

    classes = [];

    constructor() {
        this.userinfo = { name: 'Indresh', address: 'Noida' };
        //    setTimeout(()=>{
        //     this.msgclass = 'success';
        //     // this.flag=true;
        //    },5000);

        this.classes = ['alert','fixed-bottom','alert-info'];
    }

    sayHello(ev) {
        console.log(ev);
        alert('Hi there');
        this.flag = !this.flag;
    }

    boxEvent() {

        this.msgclass = 'success';
    }

    setType(txtObj) {
        this.type_cls = txtObj.value;
        this.classes[2]=txtObj.value;
    }

    applyCondition(key){
        // statically you can access an object in array style like
        // this.conditions['bold']= !this.conditions['bold'];

        // passing the key from parameter
        this.conditions[key]= !this.conditions[key];
    }

}
