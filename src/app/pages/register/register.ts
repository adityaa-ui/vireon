import { Component } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import {
  Router,
  RouterLink
} from '@angular/router';

import { AuthService } from '../../services/auth';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    FormsModule,
    CommonModule,
    RouterLink
  ],
  templateUrl: './register.html',
})

export class RegisterComponent {

  username = "";
  password = "";

  loading = false;
  showPassword = false;

  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  register(){

    this.loading = true;

    const userData = {

      username: this.username,
      password: this.password

    };

    this.authService.register(userData)
    .subscribe({

      next: (res: any) => {

        console.log(res);

        this.loading = false;

        alert("Account Created Successfully");

        this.router.navigateByUrl('/');

      },

      error: (err) => {

        console.log(err);

        this.loading = false;

        alert("Registration Failed");

      }

    });

  }

}