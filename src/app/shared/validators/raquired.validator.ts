import { AbstractControl } from "@angular/forms";

export function ValidateRequired(control: AbstractControl): any {
  if (
    control.value === null ||
    control.value === undefined ||
    (typeof control.value === 'string' && control.value.trim() === '') ||
    control.value === ' ' // Invisible character, not a blank space
  ) {
    return {
      validate: false,
      message: 'Campo obrigatório',
    };
  }

  return null;
}

export function ValidateMin(length: number): any {
  return (control: AbstractControl): any => {
    if (parseInt(control.value) < length) {
      return {
        validate: false,
        message: `O valor mínimo deve ser: ${length}.`,
      };
    }
  };
}

export function ValidateMax(length: number): any {
  return (control: AbstractControl): any => {
    if (parseInt(control.value) > length) {
      return {
        validate: false,
        message: `O valor máximo deve ser: ${length}.`,
      };
    }
  };
}
