import { Component, OnInit } from '@angular/core';

//import router.
import {Router} from "@angular/router/";

@Component({
  selector: 'app-param-routing-one',
  template: `
    <div *ngFor = "let data of datas">
        <h1 (click) = "changeComponent(data.id)">  {{data.id}}   {{data.name}}</h1>
    </div>
  `,
  styles: [
  ]
})
export class ParamRoutingOneComponent implements OnInit {

  public datas = [
    { name : 'Angular' , id : 1},
    { name : "react" , id : 2},
    { name : "node" , id : 3},
    { name : "MongoDB" , id : 4},
    { name : 'mongoose' , id : 5} 
  ]
  constructor(private router : Router) { }

  ngOnInit(): void {
  }

  changeComponent(id)
  {
    this.router.navigate(['courseDetail' , id , "show"]);
  }

}
