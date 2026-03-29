import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  username = '';
  password = '';
  message = '';

  onSubmit() {
    const usernameValid = this.username.trim().length > 5;
    const passwordValid = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/.test(this.password);

    if (usernameValid && passwordValid) {
      this.message = 'Successfully completed';
    } else {
      this.message = 'Error: Invalid username or password';
    }
  }
}
