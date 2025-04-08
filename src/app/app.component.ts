import { Component } from '@angular/core';
import { NavigationComponent } from './shared/components/navigation.component';

@Component({
    selector: 'app-root',
    imports: [NavigationComponent],
    template: '<app-navigation />',
})
export class AppComponent {}
