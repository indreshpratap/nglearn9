import { LoginComponent, RegistrationComponent, HomeComponent } from "./containers";
import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: "", component:HomeComponent,
        children: [
            { path: "admin", loadChildren: "../app-modules/admin/admin.module#AdminModule" }
        ]
    },
    { path: "login", component: LoginComponent },
    { path: "registration", component: RegistrationComponent },
]; 