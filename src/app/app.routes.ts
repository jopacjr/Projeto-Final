import { Routes } from '@angular/router';
import { AuthComponent } from './pages/auth/auth';
import { Home } from './pages/home/home';
import { authGuard } from './auth/auth-guard';

export const routes: Routes = [
  { path: '', component: AuthComponent },
  { 
    path: 'home', 
    component: Home, 
    canActivate: [authGuard] 
  },
  { path: '**', redirectTo: '' }
];