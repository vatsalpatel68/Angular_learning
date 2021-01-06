import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-for-sample',
  template: `
    <div *ngFor = "let color of colors ; index as i ; first as f ; last as l ; odd as o ; even as e">
      <h1>{{i}} : {{color}}</h1>
    </div>
    `,
  styles: []
})
export class NgForSampleComponent implements OnInit {

  public colors = ['pink' , 'yellow' , 'red' , 'green'];
  constructor() { }

  ngOnInit(): void {
  }

}
