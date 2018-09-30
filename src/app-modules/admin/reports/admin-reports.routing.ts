import { Routes } from "@angular/router";
import { AdmDailyReportsComponent } from "./containers";

export const adminReportRoutes :Routes=[
    {path:"daily",component:AdmDailyReportsComponent,data:{test:'te'}}
]