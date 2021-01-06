import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-temp',
  template: `
  <h1>
    <div *ngFor = "let emp of employees">
      <h5> {{emp | json}} </h5>
    </div>
  </h1>
  `,
  styles: []
})
export class TempComponent implements OnInit {

  public employees = [];
  constructor(public employeesService : EmployeeService) {
   }

  ngOnInit(): void {
    this.employees = this.employeesService.getEmployees();
  }

}
