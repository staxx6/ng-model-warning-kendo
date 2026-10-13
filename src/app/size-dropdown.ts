import { Component } from '@angular/core';
import { DropDownsModule } from '@progress/kendo-angular-dropdowns';
import { LabelModule } from '@progress/kendo-angular-label';

@Component({
  imports: [DropDownsModule, LabelModule],
  selector: 'app-size-dropdown',
  template: `
    <kendo-label [for]="sizes" text="Select size:"></kendo-label>
    <div class="k-form-field-wrap">
      <kendo-dropdownlist
        #sizes
        [data]="data"
        [filterable]="true"
        textField="text"
        valueField="value"
      >
      </kendo-dropdownlist>
    </div>
  `,
  styles: `
    kendo-dropdownlist {
      width: 170px;
    }
  `,
})
export class SizeDropdown {
  public data: Array<{ text: string; value: number }> = [
    { text: 'Small', value: 1 },
    { text: 'Medium', value: 2 },
    { text: 'Large', value: 3 },
  ];
}
