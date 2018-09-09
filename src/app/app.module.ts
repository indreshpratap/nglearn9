import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';

import { UIKitModule } from '../app-modules/ui-kit/uikit.module';

import { declarations,AppComponent } from './containers';
import { routes } from './app.routing';


@NgModule({
  declarations: declarations,
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
