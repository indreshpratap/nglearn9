import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ConfirmComponent } from './components/confirm.component';
import {PRIMENG} from './primeng';
@NgModule({
    declarations: [ConfirmComponent,],
    imports: [ CommonModule,FormsModule,...PRIMENG ],
    exports: [ 
        CommonModule,
        FormsModule,
        ConfirmComponent,
        ...PRIMENG
    ],
    providers: [],
})
export class UIKitModule {}