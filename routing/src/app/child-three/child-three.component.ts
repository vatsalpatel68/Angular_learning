import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-child-three',
  template: `
    <p>
      child-three works!
    </p>
  `,
  styles: [
  ]
})
export class ChildThreeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
