import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { zip, debounceTime } from 'rxjs';

import {
  AbstractControl,
  FormArray,
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

import { lastNameMustBe } from './my-validators';

@Component({
  selector: 'app-customer-form-v2',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './customer-form-v2.component.html',
  styleUrl: './customer-form-v2.component.css',
})
export class CustomerFormV2Component {
  cf!: FormGroup;
  errors: { [key: string]: string } = {};
  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.cf = this.fb.group({
      firstName: ['Nag', [Validators.required, Validators.minLength(3)]],
      lastName: ['N', [Validators.required, lastNameMustBe('N')]],
      emailGroup: this.fb.group(
        {
          email: ['nag@mail.com', [Validators.required, Validators.email]],
          confirmEmail: [
            'nag@mail.com',
            [Validators.required, Validators.email],
          ],
        },
        {
          validators: (group: FormGroup) => {
            let email = group.get('email')?.value;
            let confirmEmail = group.get('confirmEmail')?.value;
            if (email !== confirmEmail) {
              return { emailMismatch: true };
            }
            return null;
          },
        }
      ),
      phone: [''],
      notification: ['email'],
      addressArray: this.fb.array([]),
    });

    // this.cf.valueChanges.subscribe((value) => {
    //   console.log(value);
    // });
    // this.cf.statusChanges.subscribe((status) => {
    //   console.log(status);
    // });

    // this.cf.get('firstName')?.valueChanges.subscribe((value) => {
    //   console.log(value);
    // });

    let firstName = this.cf.get('firstName') as AbstractControl;
    firstName.valueChanges
      .pipe(
        debounceTime(5000)
        //distinctUntilChanged()
      )
      .subscribe((value) => {
        // making async call to server
        console.log('making async call to server');
        console.log(value);
      });

    let lastName = this.cf.get('lastName') as AbstractControl;
    zip(lastName.valueChanges, lastName.statusChanges).subscribe({
      next: (arr) => {
        if (arr[1] === 'INVALID') {
          if (lastName.errors) {
            if (lastName.errors['required']) {
              this.errors['lastName'] = 'lastName is required';
            }
            if (lastName.errors['lastNameMustBe']) {
              this.errors['lastName'] = 'lastName must start with N';
            }
          }
        } else if (arr[1] === 'VALID') {
          this.errors['lastName'] = '';
        }
      },
    });

    this.cf.get('notification')?.valueChanges.subscribe((value) => {
      let phoneControl = this.cf.get('phone');
      if (value === 'phone') {
        phoneControl?.setValidators([
          Validators.required,
          Validators.pattern('[0-9]{10}'),
        ]);
      } else {
        phoneControl?.clearValidators();
      }
      phoneControl?.updateValueAndValidity();
    });
  }

  get addressArray() {
    return this.cf.get('addressArray') as FormArray;
  }

  handleNewAddress() {
    let addressArray = this.cf.get('addressArray') as FormArray;
    addressArray.push(
      this.fb.group({
        street: [''],
        city: [''],
      })
    );
  }
  removeAddress(index: number) {
    let addressArray = this.cf.get('addressArray') as FormArray;
    addressArray.removeAt(index);
  }

  handleLoadCutomer() {
    let customerData = {
      firstName: 'John',
      lastName: 'Doe',
    };
    //this.cf.setValue(customerData);
    this.cf.patchValue(customerData);
  }

  handleSubmit(event: SubmitEvent) {
    console.log(this.cf.value);
  }
}
