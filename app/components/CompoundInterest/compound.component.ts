/**
 * Created by Siva on 15-04-2017.
 */
import { Component } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'compound',
  templateUrl: 'compound.component.html'
})

export class CompoundComponent{

  amount:number;
  interest:number;
  time:number;
  tamount:number;
  pinterest:number;
  extra: number;

  constructor(){
    this.amount = 1000;
    this.interest = 4;
    this.time = 1;
    this.pinterest = (this.amount*this.interest)/100;
    this.tamount = this.amount+this.pinterest;
  }
  compoundInterestCalc(){
    this.tamount = this.amount;
    this.extra = 0;
    for (var i = 0; i < this.time; i++) {
      this.pinterest = (this.tamount*this.interest)/100;
      this.tamount = this.tamount+this.pinterest;
      this.extra=this.extra+this.pinterest;     
    }
  this.pinterest = this.extra;
  }

}
