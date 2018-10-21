import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-home',
    template: `<div class="top-header"><a routerLink="/admin/assesment/group">Group</a>
    <a routerLink="/admin/assesment/questions">Questions</a>
    <a routerLink="/admin/reports/daily">Daily Reports</a>
    </div>
    <router-outlet></router-outlet>
    `
 
})
export class HomeComponent implements OnInit {
    constructor() { }

    ngOnInit(): void { }
}
