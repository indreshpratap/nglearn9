import { LoginComponent, RegistrationComponent, HomeComponent } from "./containers";
import { Routes } from '@angular/router';
import { AuthGuard } from "src/app-modules/shared/guards/auth.guard";

export const routes: Routes = [
    {
        path: "", component:HomeComponent,
     //   canActivate:[AuthGuard],
        children: [
            { path: "admin",
            loadChildren: "../app-modules/admin/admin.module#AdminModule",
            canActivate:[AuthGuard],
            canActivateChild:[AuthGuard]
         }
        ]
    },
    { path: "login", component: LoginComponent },
    { path: "registration", component: RegistrationComponent },
]; 