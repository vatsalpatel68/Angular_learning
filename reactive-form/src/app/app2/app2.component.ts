import { Component, OnInit } from '@angular/core';
import {FormGroup , FormControl , FormBuilder, Validators} from "@angular/forms";

@Component({
  selector: 'app-app2',
  templateUrl: './app2.component.html',
  styleUrls: ['./app2.component.css']
})
export class App2Component implements OnInit {

  constructor(public fb : FormBuilder) { }

  ngOnInit(): void {
  }


  //If we required more than one validators then there is array of [validators] as a second arguments.
  public userForm = this.fb.group({
    name : ['vatsal' ,[Validators.required , Validators.minLength(3)]],
    password : [10],
    reset : [10],
    address : this.fb.group({
      state : ['mehsana']
    })
  })

  submitForm(){
    console.log('submitted');
  }

 
}
