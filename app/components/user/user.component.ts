/**
 * Created by Siva on 15-04-2017.
 */
import { Component } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'user',
  templateUrl: 'user.component.html',
})

export class UserComponent{
  name: string;
  dob: string;
  email: string;
  
  constructor(){
    this.name = 'Venkata Sai Siva Reddy Kolli',
    this.dob = '13/11/1993',
    this.email = 'siva.agent@gmail.com'   
  }
}
