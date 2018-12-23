import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import {HttpClientModule} from '@angular/common/http';

import { UIKitModule } from '../app-modules/ui-kit/uikit.module';

import { declarations,AppComponent } from './containers';
import { routes } from './app.routing';
import { ApiClient } from 'src/app-modules/shared/api.client';
import { AuthGuard } from 'src/app-modules/shared/guards/auth.guard';



@NgModule({
  declarations: declarations,
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes),
    UIKitModule,
    HttpClientModule
  ],
  providers: [ApiClient,AuthGuard],
  bootstrap: [AppComponent],
  


})
export class AppModule { }
