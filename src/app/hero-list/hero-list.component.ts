import { Component, inject } from '@angular/core';
import { Hero } from '../shared/models';
import { AppState } from '../shared/app.state';

@Component({
    selector: 'app-hero-list',
    template: `
        <h1 class="text-2xl mb-4">Heroes</h1>

        <ul class="flex flex-col gap-3">
            @for(hero of heroes(); track hero.id) {
            <div
                class="h-16 flex items-center border-neutral-200 border rounded-md pl-4"
            >
                <span class="grow">{{ hero.name }}</span>

                <button class="bg-neutral-100 hover:bg-neutral-200 h-full w-24">
                    Edit
                </button>

                <button
                    (click)="deleteHero(hero)"
                    class="text-white bg-red-500 hover:bg-red-600 h-full w-24 rounded-r-md"
                >
                    Delete
                </button>
            </div>
            }
        </ul>
    `,
})
export default class HeroListComponent {
    private readonly appState = inject(AppState);

    protected readonly heroes = this.appState.heroes;

    protected deleteHero(hero: Hero) {
        this.appState.deleteHero(hero);
    }
}
