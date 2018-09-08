import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { UIKitModule } from '../app-modules/ui-kit/uikit.module';

import { containers, AppComponent } from './containers';
import { RouterModule } from '@angular/router';
import { routes } from './app.routing';



@NgModule({
  declarations: [...containers],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes),
    UIKitModule
  ],
  providers: [],
  bootstrap: [AppComponent]


})
export class AppModule { }
