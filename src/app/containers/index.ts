import { LoginComponent } from "./login/login.component";
import { RegistrationComponent } from "./registration/registration.component";
import { AppComponent } from "./app/app.component";

export const declarations = [
    AppComponent,
    LoginComponent,
    RegistrationComponent
]


export * from './app/app.component';
export * from "./registration/registration.component";
export * from "./login/login.component";