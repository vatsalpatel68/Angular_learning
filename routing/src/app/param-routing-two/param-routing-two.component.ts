import { Component, OnInit } from '@angular/core';


//For fetch the variables we use ActiveRouting.
import {ActivatedRoute, Router , ParamMap} from '@angular/router';
@Component({
  selector: 'app-param-routing-two',
  template: `
    <div>
      
      <h1>{{Id}}</h1><br/>
      <button (click) = "goBack()"> Back </button>
    </div>
  `,
  styles: [
  ]
})
export class ParamRoutingTwoComponent implements OnInit {

  public Id;
  constructor(private route : ActivatedRoute , private router : Router) { }

  ngOnInit(): void {
    //This is not update the component.
    //this.Id = parseInt(this.route.snapshot.paramMap.get('id'));
    this.route.paramMap.subscribe((data : ParamMap) => {
      this.Id = data.get('id');
    })
  }


  goBack(){
    this.router.navigate(["employee" , {id : this.Id}]);
  }

}
