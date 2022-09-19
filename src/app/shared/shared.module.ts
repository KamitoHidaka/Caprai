import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import * as fromComponents from './components/components-index';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  imports: [
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    CommonModule,
    FontAwesomeModule
  ],
  declarations: [...fromComponents.components],
  exports: [
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    CommonModule,
    ...fromComponents.components
   
  ]
})
export class SharedModule { }
