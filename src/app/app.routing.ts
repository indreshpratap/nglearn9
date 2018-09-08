import { LoginComponent, RegistrationComponent } from "./containers";
import { Routes } from '@angular/router';

export const routes: Routes = [
    { path: "", component: LoginComponent },
    { path: "registration", component: RegistrationComponent }
]; 