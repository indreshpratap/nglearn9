import { NgModule } from '@angular/core';

import { containers } from './containers';
import { UIKitModule } from '../ui-kit/uikit.module';

@NgModule({
    declarations: [...containers],
    imports: [ UIKitModule ],
    exports: [...containers],
    providers: [],
})
export class CoreModule {}