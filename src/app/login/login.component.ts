import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { AuthRequest } from '../auth-models';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: AuthRequest = {};
  errorMessage = '';

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    this.authService.login(this.form).subscribe(
      data => {
        // Store token, navigate to profile
        localStorage.setItem('token', data.token);
        this.router.navigate(['/profile']);
      },
      err => {
        this.errorMessage = err.error.message || 'Login failed';
      }
    );
  }
}
