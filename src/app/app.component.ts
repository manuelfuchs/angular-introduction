import { Component } from '@angular/core';
import { NavigationComponent } from './shared/components/navigation.component';
import { RouterOutlet } from '@angular/router';

@Component({
    selector: 'app-root',
    imports: [NavigationComponent, RouterOutlet],
    template: `
        <app-navigation />
        <router-outlet />
    `,
})
export class AppComponent {}
