import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { UserManegmentComponent } from './pages/admin/user-manegment.component';
import { ProfileComponent } from './pages/user/profile.component';
import { authGuard } from './core/guards/auth.guard';
import { adminGuard } from './core/guards/admin.guard';



export const routes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'admin', component: UserManegmentComponent, canActivate: [authGuard, adminGuard] },
    { path: 'profile', component: ProfileComponent, canActivate: [authGuard] },
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: '**', redirectTo: 'login' }
];
