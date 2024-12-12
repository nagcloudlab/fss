import { Component } from '@angular/core';
import { CustomerFormV1Component } from './customer-form-v1/customer-form-v1.component';
import { CustomerFormV2Component } from './customer-form-v2/customer-form-v2.component';

@Component({
  selector: 'app-root',
  imports: [CustomerFormV1Component, CustomerFormV2Component],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'form-management';
}
