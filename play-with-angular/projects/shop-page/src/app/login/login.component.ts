import { Component } from '@angular/core';
import { CanComponentDeactivate } from '../can-deactivate.guard';
import { FormsModule } from '@angular/forms';
// import {AuthService} from '../auth.service';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  imports: [FormsModule],
})
export class LoginComponent implements CanComponentDeactivate {
  formDirty = false; // Track form state

  // Simulate form control
  username: string = 'admin';
  password: string = 'admin';

  constructor(private authService: AuthService, private router: Router) {}

  // Update formDirty whenever input changes
  onInputChange(): void {
    this.formDirty = this.username !== '' || this.password !== '';
  }

  // CanDeactivate logic
  canDeactivate(): boolean {
    if (this.formDirty) {
      return confirm('You have unsaved changes. Do you really want to leave?');
    }
    return true;
  }

  handleSubmit(event: SubmitEvent) {
    this.authService.login({
      username: this.username,
      password: this.password,
    }); // Simulate login logic
    const redirectUrl = this.authService.redirectUrl || '/home'; // Get stored or default URL
    this.authService.redirectUrl = '/'; // Clear the stored URL
    this.router.navigateByUrl(redirectUrl); // Navigate to the URL
  }
}
