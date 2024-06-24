import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-custompipe',
  templateUrl: './custompipe.component.html',
  styleUrls: ['./custompipe.component.css']
})
export class CustompipeComponent implements OnInit {
  Fahrenheit!: number;
  celcius!: number;
  str: string = "The localeCompare method in JavaScript is used to compare two strings according to the sort order of the current locale. ";

  constructor() { }

  ngOnInit(): void {
  }
  //the locale...

}
