import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import {  UserdateService } from "../userdate.service";
import {HttpClient} from '@angular/common/http';


@Component({
  selector: 'app-app2',
  templateUrl: './app2.component.html',
  styleUrls: []
})
export class App2Component implements OnInit {

  public topics = ["React.js" , "Angular" , "Vue"]; 


  public userData = new User("vatsal" , "a@b.com" , 2983471111,"React.js" , "morning" , true);
  constructor( public user : UserdateService , public http : HttpClient  ) { }

  ngOnInit(): void {
  }

  formSubmitted(formdata){
    this.user.postRequestData(this.userData)
    .subscribe(data => {
      console.log(data);  
    })
  }

}
