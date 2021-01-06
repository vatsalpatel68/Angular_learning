import { Component,  OnInit } from '@angular/core';
import { FormControl, FormGroup} from '@angular/forms';
import {DataHandlingService} from '../data-handling.service';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {

  constructor(public  service : DataHandlingService) { }

  ngOnInit(): void {
    
  }

  inputData = new FormGroup({
    input : new FormControl('')
  })


  addData(){
    this.service.setData(this.inputData.get('input').value);
    this.inputData.setValue({
      input : ""
    })
  }

}
