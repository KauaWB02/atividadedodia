import { AbstractControl } from '@angular/forms';
import InputMessageErrorInterface from '../interfaces/input-message-error.interface';

export function ValidateEmail(control: AbstractControl): InputMessageErrorInterface | null {
  if (validEmail(control.value)) {
    return null;
  }

  return {
    validate: false,
    message: 'E-mail inválido',
  };
}

function validEmail(email: string): boolean {
  const REG_EMAIL =
    /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  return REG_EMAIL.test(email?.toLowerCase());
}
