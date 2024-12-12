import { AbstractControl, ValidationErrors } from '@angular/forms';

export function lastNameMustBe(ln: string): ValidationErrors | null {
  return function (control: AbstractControl): ValidationErrors | null {
    if (control.value === ln) {
      return null;
    }
    return { lastNameMustBe: true };
  };
}
