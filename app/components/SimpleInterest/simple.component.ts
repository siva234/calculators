/**
 * Created by Siva on 15-04-2017.
 */
import { Component } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'simple',
  templateUrl: 'simple.component.html'
})

export class SimpleComponent{
  amount:number;
  interest:number;
  time:number;
  tamount:number;
  pinterest:number;

  constructor(){
    this.amount = 1000;
    this.interest = 4;
    this.time = 1;
    this.pinterest = (this.amount*this.interest*this.time)/100;
    this.tamount = this.amount+this.pinterest;
  }
  simpleInterestCalc(){
    this.pinterest = (this.amount*this.interest*this.time)/100;
    this.tamount = this.amount+this.pinterest;
  }
}
