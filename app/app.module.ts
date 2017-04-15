import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent }  from './app.component';
import { UserComponent }  from './components/user/user.component';
import { SimpleComponent }  from './components/SimpleInterest/simple.component';
import { CompoundComponent }  from './components/CompoundInterest/compound.component';

import { routing }  from './app.routes';

@NgModule({
  imports:      [ BrowserModule, FormsModule, routing, ],
  declarations: [ AppComponent, UserComponent, SimpleComponent, CompoundComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
