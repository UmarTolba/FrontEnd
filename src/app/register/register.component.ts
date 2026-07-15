import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { RegisterRequest } from '../auth-models';
import { Users } from '../Users';
//

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  user: Users = new Users();
  errorMessage = '';
  successMessage = '';

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

    // onSubmit(): void {
    //   this.authService.register(this.user).subscribe(

    //     data => {
    //       this.successMessage = 'Registration successful! You can now login.';
    //       this.errorMessage = '';
    //     },
    //           err => {
    //       // console.error(err); // Log the full error to the console for debugging
    //       this.errorMessage = 'Registration failed. Please check the console for more details.';
    //       if (err.error && typeof err.error === 'object' && err.error.error) {
    //           this.errorMessage = err.error.error;
    //       } else if (err.status === 403) {
    //           this.errorMessage = 'Registration forbidden. This may be a security configuration issue on the server.';
    //       }
    //       this.successMessage = '';
    //     }
    //   );
    // }
    savReq() {
      console.log("test")
      this.authService.register(this.user).subscribe(data => {
        
        //  this.successMessage = 'Registration successful! You can now login.';
          // this.errorMessage = '';
          console.log(data)
        },
              err => console.log("err"));
                
                
                
                // {console.error(err); // Log the full error to the console for debugging

          // this.errorMessage = 'Registration failed. Please check the console for more details.';
          // if (err.error && typeof err.error === 'object' && err.error.error) {
          //     this.errorMessage = err.error.error;
          // } else if (err.status === 403) {
          //     this.errorMessage = 'Registration forbidden. This may be a security configuration issue on the server.';
          // }
          // this.successMessage = '';

        }
      

    }
  
