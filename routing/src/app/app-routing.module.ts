import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


//import the components.
import {EmployeeListComponent} from './employee-list/employee-list.component';
import {TempListComponent} from './temp-list/temp-list.component';
import {TestComponent} from './test/test.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import { ParamRoutingOneComponent } from './param-routing-one/param-routing-one.component';
import { ParamRoutingTwoComponent } from './param-routing-two/param-routing-two.component';
import { ChildOneComponent } from './child-one/child-one.component';
import { ChildTwoComponent } from './child-two/child-two.component';
import { ChildThreeComponent } from './child-three/child-three.component';

const routes: Routes = [
  {path : '' , component : ParamRoutingOneComponent},
  {path : "employee" , component : EmployeeListComponent},
  {path : "temp" , component : TempListComponent},
  {path : "courseDetail/:id/show" , component : ParamRoutingTwoComponent },

  //This will demonstarate child routing in Angular.
  {path : "child" , component : ChildOneComponent , children : [
    { path : 'second' , component : ChildTwoComponent},
    { path : "Third" , component : ChildThreeComponent}
  ]},


  {path : "**" , component : PageNotFoundComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


//Export all the components.
export let  RouteComponents = [EmployeeListComponent , TempListComponent , PageNotFoundComponent , ParamRoutingOneComponent , ChildOneComponent , ChildTwoComponent , ChildThreeComponent];
