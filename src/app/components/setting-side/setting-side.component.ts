import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-setting-side',
  templateUrl: './setting-side.component.html',
  styleUrls: ['./setting-side.component.css'],
})
export class SettingSideComponent {
  form = new FormGroup({});
  inputs: { type: string; config: FormlyFieldConfig }[] = [];
  availableTypes = ['Text', 'Number', 'Email', 'file'];
  model: { [key: string]: any } = {};

  constructor(private router: Router, private userService: UserService) {
  }

  addInput(type: string): void {
    let inputConfig: FormlyFieldConfig;
    const inputKey = `${type.toLowerCase()} input ${
      this.getFilteredInputs(type).length + 1
    }`;

    switch (type) {
      case 'Text':
        inputConfig = {
          key: inputKey,
          type: 'input',
          templateOptions: {
            label: 'Text',
            type: 'text',
            placeholder: 'Enter Text',
          },
        };
        break;
      case 'Number':
        inputConfig = {
          key: inputKey,
          type: 'input',
          templateOptions: {
            label: 'Number',
            type: 'number',
            placeholder: 'Enter Number',
          },
        };
        break;
      case 'Email':
        inputConfig = {
          key: inputKey,
          type: 'input',
          templateOptions: {
            label: 'Email',
            type: 'email',
            placeholder: 'Enter Email',
          },
        };
        break;
      case 'file':
        inputConfig = {
          key: inputKey,
          type: 'file',
          templateOptions: {
            label: 'Image',
            attributes: {
              class: 'form-control',
            },
          },
        };
        break;
      default:
        return;
    }

    this.inputs.push({ type, config: inputConfig });
    this.model[inputKey] = null;
  }

  getFilteredInputs(
    type: string
  ): { type: string; config: FormlyFieldConfig }[] {
    return this.inputs.filter((i) => i.type === type);
  }

  // submit(): void {
  //   this.userService.saveUserData(this.model);
  //   this.router.navigate(['/viewSide']);
  // }
  // submit(type: string): void {
  //   this.userService.saveUserData(this.model);
  //   this.router.navigate(['/viewSide'], { state: { type: type } });
  // }
// setting-side.component.ts
// ... (existing code)

submit(type?: string): void { // Make 'type' argument optional with a default value
  if (type) {
    // This block will be executed when the 'submit()' method is called with the 'type' argument
    this.userService.saveUserData(this.model);
    this.router.navigate(['/viewSide'], { state: { type: type } });
  } else {
    // This block will be executed when the 'submit()' method is called without the 'type' argument
    this.userService.saveUserData(this.model);
    this.router.navigate(['/viewSide']);

    // Handle other logic here, if needed
  }
}

}
