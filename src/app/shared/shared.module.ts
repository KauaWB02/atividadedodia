import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormInputComponent } from './components/form-input/form-input.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ButtonComponent } from './components/button/button.component';
import { InputMessageErrorComponent } from './components/input-message-error/input-message-error.component';
import { MaterialModule } from './material.module';
@NgModule({
  declarations: [FormInputComponent, ButtonComponent, InputMessageErrorComponent],
  exports: [FormInputComponent, ButtonComponent, InputMessageErrorComponent, MaterialModule],
  imports: [MaterialModule],
})
export class SharedModule {}
