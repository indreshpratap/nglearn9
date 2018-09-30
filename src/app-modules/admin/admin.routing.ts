import { Routes } from "@angular/router";

export const adminRoutes: Routes = [
    {
        path: "assesment",
        loadChildren: "./assesment-manager/assesment-manager.module#AssesmentManagerModule"
    },
    {
        path: "reports",
        loadChildren: './reports/admin-reports.module#AdminReportsModule'
    }
];