import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-switch-sample',
  template: `
    <div [ngSwitch] = "setColor">
      <div *ngSwitchCase = "'red'">This is red color</div> 
      <div *ngSwitchCase = "'blue'">This is blue color</div>
      <div *ngSwitchCase = "'yellow'">This is yellow color</div>
      <div *ngSwitchDefault>This is default color</div>
    </div>
  `,
  styles: []
})
export class NgSwitchSampleComponent implements OnInit {

  public setColor = "pink";
  constructor() { }

  ngOnInit(): void {
  }

}
