import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-home',
    template: `<div><a routerLink="/admin/assesment/group">Group</a></div>
    <router-outlet></router-outlet>
    `
 
})
export class HomeComponent implements OnInit {
    constructor() { }

    ngOnInit(): void { }
}
