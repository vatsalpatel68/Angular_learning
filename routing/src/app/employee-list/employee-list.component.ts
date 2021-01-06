import { Component, OnInit } from '@angular/core';
import {ActivatedRoute , ParamMap} from '@angular/router';

@Component({
  selector: 'app-employee-list',
  template: `
  <div>
    <h1>
      Employee List Component works
    </h1><br/>
    <h1>{{optionalId}}</h1>
  </div>
 `,
  styles: [
  ]
})
export class EmployeeListComponent implements OnInit {

  public optionalId;

  constructor(private route : ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((data : ParamMap) => {
          this.optionalId = data.get("id");
    })
  }

}
