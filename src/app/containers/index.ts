import { LoginComponent } from "./login/login.component";
import { RegistrationComponent } from "./registration/registration.component";
import { AppComponent } from "./app/app.component";
import { HomeComponent } from "./home/home.component";

export const declarations = [
    AppComponent,
    LoginComponent,
    RegistrationComponent,
    HomeComponent
]


export * from './app/app.component';
export * from "./registration/registration.component";
export * from "./login/login.component";
export * from './home/home.component';