import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-adm-daily-reports',
    templateUrl: './daily-reports.component.html'
})
export class AdmDailyReportsComponent implements OnInit {

    option1;
    option2;
    constructor() {
        this.option1 = {
            loop: true,
            margin: 10,
            nav: true,
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 3
                },
                1000: {
                    items: 5
                }
            }
        };
        this.option2 = {
            loop: true,
            margin: 10,
            nav: false,
            dots:true
            
        };
     }

    ngOnInit(): void { }
}
