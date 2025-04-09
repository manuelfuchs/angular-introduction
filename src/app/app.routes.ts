import { Routes } from '@angular/router';

export const routes: Routes = [
    { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
    {
        path: 'dashboard',
        loadComponent: () => import('./dashboard/dashboard.component'),
        title: 'Dashboard',
    },
    {
        path: 'heroes',
        loadComponent: () => import('./hero-list/hero-list.component'),
        title: 'Heroes',
    },
    {
        path: 'heroes/new',
        loadComponent: () => import('./hero-detail/hero-detail.component'),
        title: 'New Hero',
    },
    {
        path: 'heroes/:heroId',
        loadComponent: () => import('./hero-detail/hero-detail.component'),
        title: 'Edit Hero',
    },

    // NOTE: Currently no 404 page -> redirect all to home
    { path: '**', redirectTo: 'dashboard' },
];
