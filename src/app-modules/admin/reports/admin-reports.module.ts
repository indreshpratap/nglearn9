import { NgModule } from '@angular/core';
import { UIKitModule } from '../../ui-kit/uikit.module';
import { containers } from './containers';
import { RouterModule } from '@angular/router';
import { adminReportRoutes } from './admin-reports.routing';

@NgModule({
    declarations:containers,
    imports: [ UIKitModule,
         RouterModule.forChild(adminReportRoutes) ],
    exports: [],
    providers: [],
})
export class AdminReportsModule {}