import { IfStmt } from '@angular/compiler';
import { Component, EventEmitter, Input , OnInit, Output, SimpleChanges } from '@angular/core';
import { DataHandlingService  } from '../data-handling.service';

@Component({
  selector: 'app-output',
  templateUrl: './output.component.html',
  styleUrls: ['./output.component.css']
})
export class OutputComponent implements OnInit {

  
  @Input() public data;
  
  @Output() public event = new EventEmitter();
  constructor(private Service : DataHandlingService) { }

  ngOnInit(): void {
    
  }

  ngOnChanges(changes : SimpleChanges){
    
  }

  deleteItem(data , counter)
  { 
    this.Service.deleteData(data , counter);
}



}
