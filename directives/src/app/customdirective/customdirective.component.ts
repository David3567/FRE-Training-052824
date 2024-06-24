import { Component, ElementRef, HostListener, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-customdirective',
  templateUrl: './customdirective.component.html',
  styleUrls: ['./customdirective.component.css']
})
export class CustomdirectiveComponent implements OnInit {
  
  color!: string;
  constructor() { }

  ngOnInit(): void {
  }



}
