import { Routes } from '@angular/router';
import { Login } from './pages/login/login';
import { Layout } from './pages/layout/layout';
import { Dashboard } from './pages/dashboard/dashboard';
import { Employee } from './pages/employee/employee';
import { Leave } from './pages/leave/leave';
import { authGuard } from './guards/auth-guard';

export const routes: Routes = [

    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'login', component: Login },
    {
        path: '', component: Layout, children: [
            { path: 'dashboard', component: Dashboard, canActivate: [authGuard] },
            { path: 'employee', component: Employee, canActivate: [authGuard] },
            { path: 'leave', component: Leave, canActivate: [authGuard] }
        ]
    }
];
