import { Component } from '@angular/core';
import { FieldType, FieldTypeConfig } from '@ngx-formly/core';

@Component({
  selector: 'formly-field-input',
  template: `
    <input
      type="email"
      [formControl]="formControl"
      [formlyAttributes]="field"
    />
  `,
})
export class InputFieldType extends FieldType<FieldTypeConfig> {}
