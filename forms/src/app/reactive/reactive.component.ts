import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.css']
})
export class ReactiveComponent implements OnInit {

  contactForm!: FormGroup
  @Output() emitOnSubmit: EventEmitter<FormGroup> = new EventEmitter();
  // @Input() receivedData: {name: string, email: string};
  @Input() formData: any;

  constructor() { }

  ngOnInit(): void {
    this.contactForm = new FormGroup({
      name: new FormControl(this.formData.name),
      email: new FormControl(this.formData.email),
    })
  }

  onSubmit() {
    console.log(this.contactForm.value);
    this.emitOnSubmit.emit(this.contactForm.value)
  }

}
