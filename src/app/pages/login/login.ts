import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { RouterLink } from '@angular/router';

import { AuthService } from '../../services/auth';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, CommonModule, RouterLink],
  templateUrl: './login.html',
})

export class LoginComponent {

  username = "";
  password = "";


  loading = false;
  showLogin = false;
  isLoggedIn = false;
isAdmin = false;
showAdminLogin = false;
showPassword = false;

  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  login(selectedRole: string){

  this.loading = true;

  const userData = {
    username: this.username,
    password: this.password,
    role: selectedRole
  };

  this.authService.login(userData)
  .subscribe({

   next: (res: any) => {

  this.isLoggedIn = true;

  this.isAdmin = res.user.role === "Admin";

  console.log(res);

  localStorage.setItem(
    "user",
    JSON.stringify(res.user)
  );

  this.loading = false;

  this.showLogin = false;
  this.showAdminLogin = false;

  setTimeout(() => {

    if(res.user.role === "Admin"){

      this.router.navigateByUrl('/admin');

    } else {

      this.router.navigateByUrl('/dashboard');

    }

  }, 0);

},

    error: (err) => {

      this.loading = false;

      alert("Invalid Credentials");

      console.log(err);

    }

  });

}

}