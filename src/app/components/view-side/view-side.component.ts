import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterStateSnapshot } from '@angular/router';
import { FormlyFieldConfig, FormlyFormOptions } from '@ngx-formly/core';
import { UserService } from 'src/app/services/user.service';
import { FormGroup, Validators } from '@angular/forms';
import { faFilm } from '@fortawesome/free-solid-svg-icons';
import { faStar as farStar } from '@fortawesome/free-regular-svg-icons';
import { faStar as fasStar } from '@fortawesome/free-solid-svg-icons';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
@Component({
  selector: 'app-view-side',
  templateUrl: './view-side.component.html',
  styleUrls: ['./view-side.component.css'],
})
export class ViewSideComponent implements OnInit {
  dataFromSettingSide: any;
  fields: FormlyFieldConfig[] = [];
  form = new FormGroup({});
  formOptions: FormlyFormOptions = {};

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private userService: UserService,
    library: FaIconLibrary
  ) {
    library.addIcons(fasStar, farStar);
  }

  ngOnInit() {
    this.dataFromSettingSide = this.userService.getUserData();
    console.log(this.dataFromSettingSide);

    this.fields = Object.keys(this.dataFromSettingSide).map((key) => {
      const type = key.toLowerCase().split('input')[0];
      console.log('type is', type);
      return {
        key,
        type: 'input',
        templateOptions: {
          label: key,
          required: true,
          type: 'text',
          placeholder: `Enter ${key}`,
          addonLeft: {
            class: `${this.getIconForField(type)} `,
            icon: this.getIconForField(type),
          },
        },
        validators: {
          validation: [Validators.required],
        },
        validation: {
          messages: {
            required: `
              type
            ${key} is required.`,
          },
        },
        fieldGroupClassName: `form-group ${type}-input`,
      };
    });
  }

  getIconForField(type: string): string {
    switch (type?.trim()) {
      case 'text':
        return 'fa-solid  fa-font';
      case 'number':
        return 'fa-solid  fa-hashtag';
      case 'email':
        return 'fa-solid fa-envelope';
      case 'file':
        return 'fa-solid fa-file';
      default:
        return 'fa-solid  fa-hashtag';
    }
  }

  // submit(e?: any): void {
  //   if (this.form.valid) {
  //     this.userService.saveUserData(this.dataFromSettingSide);
  //     console.log(this.dataFromSettingSide);
  //   } else {
  //     alert('Please fill in all required fields.');
  //   }
  // }
  submit(e?: any): void {
    this.form.markAllAsTouched();
    if (this.form.valid) {
      this.userService.saveUserData(this.dataFromSettingSide);
      console.log(this.dataFromSettingSide);
    } else {
      alert('Please fill in all required fields.');
    }
  }
}
