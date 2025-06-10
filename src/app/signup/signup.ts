import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './signup.html',
  styleUrl: './signup.css'
})
export class Signup {
  username = '';
  email = '';
  password = '';
  confirmPassword = '';

  signup() {
    if (this.password !== this.confirmPassword) {
      alert("Passwords don't match!");
      return;
    }
    console.log('Signing up:', { 
      username: this.username, 
      email: this.email 
    });
    alert(`Account created for ${this.username}`);
  }

}
