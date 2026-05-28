import { Routes } from '@angular/router';

import { LoginComponent } from './pages/login/login';
import { DashboardComponent } from './pages/dashboard/dashboard';
import { AdminComponent } from './pages/admin/admin';
import { RegisterComponent } from './pages/register/register';

export const routes: Routes = [

  {
    path: '',
    component: LoginComponent
  },

  {
    path: 'dashboard',
    component: DashboardComponent
  },

  {
    path: 'admin',
    component: AdminComponent
  },
  {
  path: 'register',
  component: RegisterComponent
}

];