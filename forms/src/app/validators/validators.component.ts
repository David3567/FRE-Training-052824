import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
  ValidationErrors,
  Validators,
} from '@angular/forms';
import { Observable, catchError, debounceTime, map, of } from 'rxjs';

@Component({
  selector: 'app-validators',
  templateUrl: './validators.component.html',
  styleUrls: ['./validators.component.css'],
})
export class ValidatorsComponent implements OnInit {
  form!: FormGroup;
  get name() {
    return this.form.get('name');
  }

  get email() {
    return this.form.get('email');
  }

  constructor(private fb: FormBuilder, private http: HttpClient) {}

  ngOnInit() {
    this.form = this.fb.group({
      name: ['', [this.gte]],
      email: ['', [], [this.asyncCheckEmail()]] // asyncCheckEmail() has a parentheses because it returns a observable. Also, it is the third variable
    });
  }

  private gte(control: AbstractControl): ValidationErrors | null {
    const v = control.value.length;
    if (isNaN(v)) {
      return { gte: true, requiredValue: 10 };
    }
    if (v <= 10) {
      return { gte: true, requiredValue: 10 };
    }
    return null;
  }

  private asyncCheckEmail(): AsyncValidatorFn {

    return (control: AbstractControl): Observable<ValidationErrors | null> => {
      const url = 'http://localhost:4231/auth/check-email';
      const value: string = control.value;
      return this.http.post(url, { email: value }).pipe(
        debounceTime(500),
        map((data: any) => {
          console.log(data);
          if (data) {
            return { hasemail: true };
          }
          return null;
        }),
        catchError(() => of(null))
      );
    };
  }

  onSubmit() {
    console.log(this.form.value);
  }
}


interface AsyncValidatorFn {
  (control: AbstractControl):
    | Promise<ValidationErrors | null>
    | Observable<ValidationErrors | null>;
}
