import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Users } from '../Users';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  user?: Users;
  errorMessage = '';

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.authService.getProfile().subscribe(
      data => {
        this.user = data;
      },
      err => {
        this.errorMessage = err.error.message || 'Failed to load profile';
      }
    );
  }
}
