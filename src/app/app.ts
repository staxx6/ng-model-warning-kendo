import { Component } from '@angular/core';
import { ReactiveFormsModule, FormGroup } from '@angular/forms';
import { SizeDropdown } from './size-dropdown';

@Component({
  imports: [ReactiveFormsModule, SizeDropdown],
  selector: 'app-root',
  template: `
  <form [formGroup]="form">
    <app-size-dropdown/>
  </form>
  `,
})
export class App {
  form = new FormGroup({});
}
