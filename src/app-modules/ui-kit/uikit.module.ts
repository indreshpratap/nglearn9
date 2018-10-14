import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { PRIMENG } from './primeng';

import { components } from './components';
import { pipes } from './pipes';
import { directives } from './directives';

@NgModule({
    declarations: [...components, ...pipes,...directives],
    imports: [CommonModule, FormsModule, ReactiveFormsModule, ...PRIMENG],
    exports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        ...PRIMENG,

        ...components,
        ...pipes,
        ...directives
    ],
    providers: [],
})
export class UIKitModule { }