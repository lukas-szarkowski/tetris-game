import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatIconModule} from "@angular/material/icon";
import {MatFormField, MatFormFieldModule} from "@angular/material/form-field";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatCardModule} from "@angular/material/card";

const MATERIAL_MODULES = [
  MatIconModule,
  MatFormFieldModule,
  MatToolbarModule,
  MatCardModule
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports: [...MATERIAL_MODULES]
})
export class MaterialModule { }
