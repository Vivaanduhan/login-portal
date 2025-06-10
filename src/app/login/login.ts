import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {
  username = '';
  password = '';

  login() {
    console.log('Logging in with:', this.username, this.password);
    alert(`Logged in as ${this.username}`);
  }
  

}
