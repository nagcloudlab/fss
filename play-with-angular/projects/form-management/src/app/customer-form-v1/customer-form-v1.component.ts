import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-customer-form-v1',
  imports: [CommonModule, FormsModule],
  templateUrl: './customer-form-v1.component.html',
  styleUrl: './customer-form-v1.component.css',
})
export class CustomerFormV1Component {
  customerModel: any = {};

  handleSubmit(event: SubmitEvent, form: NgForm) {
    // if (form.valid) {
    //   console.log('Form submitted', form.value);
    // }
    console.log('Form submitted', this.customerModel);
  }

  loadCustomer() {
    let customerData = {
      firstName: 'John',
      lastName: 'Doe',
    };
    this.customerModel = customerData;
  }
}
