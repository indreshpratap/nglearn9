import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { PRIMENG } from './primeng';

import { components } from './components';
import { pipes } from './pipes';

@NgModule({
    declarations: [...components, ...pipes],
    imports: [CommonModule,FormsModule, ...PRIMENG],
    exports: [
        CommonModule,
         FormsModule,

        ...PRIMENG,

        ...components,
        ...pipes
    ],
    providers: [],
})
export class UIKitModule { }