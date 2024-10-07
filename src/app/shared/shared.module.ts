import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormInputComponent } from './components/form-input/form-input.component';
import { ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [FormInputComponent],
  exports: [FormInputComponent, ReactiveFormsModule],
  imports: [CommonModule, ReactiveFormsModule],
})
export class SharedModule {}
