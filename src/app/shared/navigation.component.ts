import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

interface NavItem {
    name: string;
    route: string[];
}

@Component({
    selector: 'app-navigation',
    imports: [RouterLink, RouterLinkActive],
    template: `
        <nav class="flex items-center justify-center h-[64px] border-b-2">
            <div class="flex items-center gap-16">
                <a class="text-x" [routerLink]="'/'">Tour of heroes</a>

                <div class="flex gap-5">
                    @for (navItem of navItems; track $index) {
                        <a [routerLink]="navItem.route" routerLinkActive="underline">{{ navItem.name }}</a>
                    }
                </div>
            </div>
        </nav>
    `
})
export class NavigationComponent {
    protected readonly navItems: NavItem[] = [
        {
            name: 'Dashboard',
            route: ['/dashboard'],
        },
        {
            name: 'Heroes',
            route: ['/heroes'],
        },
    ];
}
