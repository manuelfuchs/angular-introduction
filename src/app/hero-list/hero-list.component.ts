import { Component, signal } from '@angular/core';
import { defaultHeroes } from '../shared/models';

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
                <button
                    class="bg-neutral-100 hover:bg-neutral-200 h-full px-16"
                >
                    Edit
                </button>
            </div>
            }
        </ul>
    `,
})
export default class HeroListComponent {
    protected readonly heroes = signal(defaultHeroes);
}
