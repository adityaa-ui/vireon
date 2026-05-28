import {
  Component,
  OnInit,
  ChangeDetectorRef
} from '@angular/core';

import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

import { UserService } from '../../services/user';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './admin.html',
  
})

export class AdminComponent implements OnInit {

  users: any[] = [];

  loading = true;
  showPassword = false;

  constructor(
    private userService: UserService,
    private cdr: ChangeDetectorRef,
    private router: Router
  ) {}

  ngOnInit(): void {

    this.loadUsers();

  }

  loadUsers(){

    this.loading = true;

    this.userService.getUsers()
    .subscribe({

      next: (res: any[]) => {

        console.log(res);

        this.users = res;

        this.loading = false;

        this.cdr.detectChanges();

      },

      error: (err) => {

        console.log(err);

        this.loading = false;

        this.cdr.detectChanges();

      }

    });

  }

  goHome(){

    this.router.navigateByUrl('/');

  }

  logout(){

    localStorage.removeItem('user');

    this.router.navigateByUrl('/');

  }
  goToRegister(){

  this.router.navigateByUrl('/register');

}
manageUsers(){

  const section = document.getElementById('users-section');

  section?.scrollIntoView({

    behavior: 'smooth'

  });

}

}