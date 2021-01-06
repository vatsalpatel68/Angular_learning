import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'reactive-form';

  public userForm =new  FormGroup({
    name : new FormControl('vatsal'),
    password  : new FormControl(),
    reset : new FormControl(),
    address : new FormGroup({
      state : new FormControl("")
    })
  })

  loadState(){
    //This method is use to change the value of a form field.
    console.log(this.userForm.get('name').valid);

  }
  
  
}
