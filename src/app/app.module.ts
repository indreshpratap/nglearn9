import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header.component';
import { MenuComponent } from './components/menu.component';
import { BindingsComponent } from './examples/bindings.component';
import { StructuralComponent } from './examples/structural.component';
import { AppMessageComponent } from './components/msg.component';
import { AppObjMessageComponent } from './components/msg-obj.component';
import { ConfirmComponent } from './components/confirm.component';
import { YesNoPipe } from './pipes/yesno.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MenuComponent,
    BindingsComponent,
    StructuralComponent,
    AppMessageComponent,
    AppObjMessageComponent,
    ConfirmComponent,
    YesNoPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
