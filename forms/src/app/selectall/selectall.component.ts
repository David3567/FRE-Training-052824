import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-selectall',
  templateUrl: './selectall.component.html',
  styleUrls: ['./selectall.component.css'],
})
export class SelectallComponent implements OnInit {
  form!: FormGroup;
  selectedItems: string[] = [];

  movies: any = [
    'Changjinhu (2021)',
    'Dune (2021)',
    'Shang-Chi and the Legend of the Ten Rings (2021)',
    'Free Guy (2021)',
    'The Many Saints of Newark (2021)',
    'Finch (2021)',
    'Candyman (2021)',
    'No Time to Die (2021)',
    'Halloween Kills (2021)',
  ];

  constructor(private fb: FormBuilder) {}

  get selectall() {
    return this.form.get('selectall');
  }

  get options(): AbstractControl | any {
    return this.form.get('options');
  }

  ngOnInit(): void {
    this.form = this.fb.group({
      selectall: false,
      options: this.fb.group(
        this.movies.reduce((acc: any, cur: string) => {
          acc[cur] = false;
          return acc;
        }, {})
      ),
    });

    this.toggleitems();
    this.selectallitem();
  }

  toggleitems() {
    this.movies.forEach((item: string) => {
      this.options.get(item).valueChanges.subscribe((val: boolean) => {
        if (val && !this.selectedItems.includes(item)) {
          this.selectedItems.push(item);
        } else if (!val) {
          this.selectedItems = this.selectedItems.filter((ele) => ele !== item);
        }
        console.log(this.selectedItems);
        this.selectall?.setValue(
          this.selectedItems.length === this.movies.length,
          { emitEvent: false }
        );
      });
    });
  }

  selectallitem() {
    this.selectall?.valueChanges.subscribe((val: boolean) => {
      this.setAllItemsValue(val);
    });
  }

  setAllItemsValue(val: boolean) {
    Object.values(this.options.controls).forEach((control: any) => {
      control.setValue(val);
    });
  }

  onClearAll() {
    this.setAllItemsValue(false);
    this.selectall?.setValue(false);
    this.selectedItems = [];
  }
}
