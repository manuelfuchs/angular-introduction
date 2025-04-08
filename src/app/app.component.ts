import { Component } from '@angular/core';
import { NavigationComponent } from './shared/components/navigation.component';
import { RouterOutlet } from '@angular/router';

@Component({
    selector: 'app-root',
    imports: [NavigationComponent, RouterOutlet],
    template: `
        <app-navigation />

        <div class="overflow-y-auto h-[calc(100vh-64px)]">
            <div class="container mx-auto mt-4">
                <router-outlet />
            </div>
        </div>
    `,
})
export class AppComponent {}
