import { Routes } from "@angular/router";
import { AdminQueGroupComponent, AdminQuestionsComponent, AdminQuestionListComponent } from "./containers";

export const queMgrRoutes: Routes = [
    { path: 'group', component: AdminQueGroupComponent },
    { path: 'questions', component: AdminQuestionsComponent },
    { path: 'questions-list', component: AdminQuestionListComponent },
]