import { Component } from '@angular/core';
import { CustomerFormV1Component } from './customer-form-v1/customer-form-v1.component';

@Component({
  selector: 'app-root',
  imports: [CustomerFormV1Component],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'form-management';
}
