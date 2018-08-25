import { NgModule } from '@angular/core';
import { LoginComponent } from './components/login.component';

import { UIKitModule } from '../ui-kit-module/uikit.module';

@NgModule({
    declarations: [LoginComponent],
    imports: [UIKitModule],
    exports: [LoginComponent],
    providers: [],
})
export class AppCoreModule { }