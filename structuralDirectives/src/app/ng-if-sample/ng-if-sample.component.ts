import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-if-sample',
  template: `
  <div *ngIf = "isVisible; then thenBlock; else elseBlock"> </div> 
  <ng-template #thenBlock >
        <h1 >This is then block.</h1>
    </ng-template>
    <ng-template #elseBlock>
        <h1>This is else block.</h1>
    </ng-template>
  `,
  styles: []
})
export class NgIfSampleComponent implements OnInit {

  public isVisible = false;
  constructor() { }

  ngOnInit(): void {
  }

}
