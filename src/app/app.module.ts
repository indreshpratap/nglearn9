import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header.component';
import { MenuComponent } from './components/menu.component';
import { BindingsComponent } from './examples/bindings.component';
import { StructuralComponent } from './examples/structural.component';
import { AppMessageComponent } from './components/msg.component';
import { AppObjMessageComponent } from './components/msg-obj.component';
import { YesNoPipe } from './pipes/yesno.pipe';
import { AppCoreModule } from './core-module/core.module';
import { UIKitModule } from './ui-kit-module/uikit.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MenuComponent,
    BindingsComponent,
    StructuralComponent,
    AppMessageComponent,
    AppObjMessageComponent,
    YesNoPipe
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    UIKitModule,
    AppCoreModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
