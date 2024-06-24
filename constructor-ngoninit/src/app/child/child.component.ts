import { Component, Input, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit, OnDestroy {

  formattedValue = '';
  @Input() valueFromParent = 0;

  constructor() {
    console.log('Called Constructor method');
    console.log('constructor' + this.valueFromParent);
    // if(this.valueFromParent < 50){
    //   this.formattedValue = 'less than 50';
    // } else {
    //   this.formattedValue = 'greater than or equal to 50';
    // }
   }

  ngOnInit(): void {
    console.log('Called ngOnInit method');
    console.log('init' + this.valueFromParent);
    if(this.valueFromParent < 50){
      this.formattedValue = 'less than 50';
    } else {
      this.formattedValue = 'greater than or equal to 50';
    }
    

  }

  ngOnDestroy(): void {
    
  }

}
