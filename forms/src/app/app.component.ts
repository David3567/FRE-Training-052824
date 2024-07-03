import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'forms';
  formData: any = { name: 'Abc', email: 'abc@email' };

  onEmit(data: any) {
    console.log(data);
    this.formData = data;
  }
}
