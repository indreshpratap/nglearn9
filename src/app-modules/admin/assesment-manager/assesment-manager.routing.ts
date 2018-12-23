import { Routes } from "@angular/router";
import { AdminQueGroupComponent, AdminQuestionsComponent, AdminQuestionListComponent, AdminQuestionsEditComponent } from "./containers";

export const queMgrRoutes: Routes = [
    { path: 'group', component: AdminQueGroupComponent },
    { path: 'questions', component: AdminQuestionsComponent },
    { path: 'questions-list', component: AdminQuestionListComponent },
    { path: 'question-edit/:id/:group', component: AdminQuestionsEditComponent },
]