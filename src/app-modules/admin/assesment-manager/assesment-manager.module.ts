import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { declarations } from './containers';
import { UIKitModule } from '../../ui-kit/uikit.module';
import { queMgrRoutes } from './assesment-manager.routing';
import { RouterModule } from '@angular/router';
import { AssesmentService } from './services/assesment.service';

@NgModule({
    declarations: declarations,
    imports: [
        UIKitModule,
        RouterModule.forChild(queMgrRoutes)
    ],
    exports: [],
    providers: [AssesmentService],
})
export class AssesmentManagerModule { }