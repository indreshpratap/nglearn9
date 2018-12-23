import { AdminQueGroupComponent } from "./que-group/que-group.component";
import { AdminQuestionsComponent } from "./questions/questions.component";
import { AdminQuestionListComponent } from "./admin-question-list/admin-question-list.component";
import { AdminQuestionsEditComponent } from "./questions-edit/questions-edit.component";

export const declarations = [
    AdminQueGroupComponent,
    AdminQuestionsComponent,
    AdminQuestionListComponent,
    AdminQuestionsEditComponent
]

export * from './que-group/que-group.component';
export * from './questions/questions.component';
export * from './questions-edit/questions-edit.component';
export * from './admin-question-list/admin-question-list.component';