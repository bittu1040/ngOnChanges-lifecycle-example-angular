import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import 'rxjs/add/operator/do';

import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';


@NgModule({
  imports:      [ BrowserModule, FormsModule, HttpClientModule ],
  declarations: [ AppComponent, UserComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
