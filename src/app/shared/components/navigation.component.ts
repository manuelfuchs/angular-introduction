import { Component } from '@angular/core';

interface NavItem {
    name: string;
    route: string;
}

@Component({
    selector: 'app-navigation',
    template: `
        <nav class="flex items-center justify-center h-16 border-b-2">
            <div class="flex items-center gap-16">
                <h1 class="text-xl">Tour of heroes</h1>

                <div class="flex gap-5">
                    @for (navItem of navItems; track $index) {
                    <a>{{ navItem.name }}</a>
                    }
                </div>
            </div>
        </nav>
    `,
})
export class NavigationComponent {
    protected readonly navItems: NavItem[] = [
        {
            name: 'Dashboard',
            route: '/dashboard',
        },
        {
            name: 'Heroes',
            route: '/hero-list',
        },
    ];
}
