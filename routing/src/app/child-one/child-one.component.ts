import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-child-one',
  template: `
    <p>
      child-one works!
      <router-outlet></router-outlet>
      <button (click) = "gotosecond()">Go to the second</button>
      <!--<button (click) = "gotoThird()">Go to the Third</button>-->
    </p>
  `,
  styles: [
  ]
})
export class ChildOneComponent implements OnInit {

  constructor(private router : Router) { }

  ngOnInit(): void {
  }

  gotosecond(){
    this.router.navigate(['child','second']);
  }



}
