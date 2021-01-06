import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `
    <div>
        <a routerLink = "/temp" >Temp</a><br>
        <a routerLink = "/employee">Employee</a>      
      </div>
  `,
  styles: [
  ]
})
export class TestComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
