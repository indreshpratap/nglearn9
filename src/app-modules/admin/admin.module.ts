import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { adminRoutes } from './admin.routing';

@NgModule({
    declarations: [],
    imports: [RouterModule.forChild(adminRoutes)],
    exports: [],
    providers: [],
})
export class AdminModule {}