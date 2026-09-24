import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { authGuard } from './auth/auth-guard';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () =>
            import('./pages/auth/auth').then((m) => m.Auth),
    },
    {
        path: 'home',
        loadComponent: () =>
            import('./pages/home/home').then((m) => m.Home),
    },
    {path: 'home', component: Home, canActivate: [authGuard]
    },
    
];