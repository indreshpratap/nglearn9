import { Routes } from "@angular/router";
import { AdminQueGroupComponent, AdminQuestionsComponent } from "./containers";

export const queMgrRoutes: Routes = [
    { path: 'group', component: AdminQueGroupComponent },
    { path: 'questions', component: AdminQuestionsComponent },
]