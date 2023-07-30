import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SettingSideComponent } from './components/setting-side/setting-side.component';
import { ViewSideComponent } from './components/view-side/view-side.component';
import { HeaderComponent } from './components/header/header.component';
import { FormlyModule } from '@ngx-formly/core';
import { FormlyBootstrapModule } from '@ngx-formly/bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FormlyFieldFile } from './components/setting-side/file-type/file-type.component';
import { InputFieldType } from './components/setting-side/file-type/email-type.component';
// import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';

@NgModule({
  declarations: [
    AppComponent,
    SettingSideComponent,
    ViewSideComponent,
    HeaderComponent,
    FormlyFieldFile,
    InputFieldType,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormlyModule.forRoot(),
    FormlyBootstrapModule,
    CommonModule,
    ReactiveFormsModule,
    FormlyBootstrapModule,
    FormlyModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,

    FormlyModule.forRoot(),
    FormlyModule.forRoot({
      types: [
        { name: 'file', component: FormlyFieldFile, wrappers: ['form-field'] },
        {
          name: 'email',
          component: InputFieldType,
        },
      ],
    }),
    FontAwesomeModule,

  ],

  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor() {
    // Add Font Awesome icons to the library
    library.add(fas);
  }
}
