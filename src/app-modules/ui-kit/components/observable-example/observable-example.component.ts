import { Component, OnInit } from '@angular/core';
import { ObservableExample } from './observable.example';

@Component({
    selector: 'app-observable-example',
    template: '<button (click)="start()"> Start</button>'
    
})
export class ObservableExampleComponent implements OnInit {
    constructor() { }

    ngOnInit(): void { }

    start(){
        new ObservableExample().process();
    }
}
