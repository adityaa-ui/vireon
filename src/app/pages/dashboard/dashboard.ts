import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [],
  templateUrl: './dashboard.html',
})

export class DashboardComponent {

  constructor(private router: Router){}

  goHome(){
    this.router.navigateByUrl('/');
  }

  logout(){

    localStorage.removeItem('user');

    this.router.navigateByUrl('/');

  }

}