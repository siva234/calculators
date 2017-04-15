/**
 * Created by Siva on 15-04-2017.
 */
import { Routes, RouterModule } from '@angular/router';

import {UserComponent} from "./components/user/user.component";
import {SimpleComponent} from "./components/SimpleInterest/simple.component";
import {CompoundComponent} from "./components/CompoundInterest/compound.component";

const appRoutes: Routes  = [
  {
    path: '',
    component: UserComponent
  },
  {
    path: 'simple',
    component: SimpleComponent
  },
  {
    path: 'compound',
    component: CompoundComponent
  }
]

export const routing = RouterModule.forRoot(appRoutes);
