import { Component, inject } from '@angular/core';
import { AppState } from '../shared/services/app.state';
import { Router } from '@angular/router';
import { Hero } from '../shared/models/hero.type';

@Component({
    selector: 'app-hero-list',
    template: `
        <h1 class="text-2xl mb-4">Heroes</h1>

        <div class="flex flex-col gap-3 items-start">
            <button
                (click)="openHeroDetail()"
                class="h-10 px-5 rounded-md border border-neutral-200 hover:bg-neutral-200">
                Create Hero
            </button>

            <ul class="flex flex-col gap-3 w-full">
                @for (hero of heroes(); track hero.id) {
                    <div class="h-16 flex items-center border-neutral-200 border rounded-md pl-4">
                        <span class="grow">{{ hero.name }}</span>

                        <button
                            (click)="openHeroDetail(hero)"
                            class="bg-neutral-100 hover:bg-neutral-200 h-full w-24">
                            Edit
                        </button>

                        <button
                            (click)="deleteHero(hero)"
                            class="text-white bg-red-500 hover:bg-red-600 h-full w-24 rounded-r-md">
                            Delete
                        </button>
                    </div>
                }
            </ul>
        </div>
    `,
})
export default class HeroListComponent {
    private readonly appState = inject(AppState);
    private readonly router = inject(Router);

    protected readonly heroes = this.appState.heroes;
    protected readonly deleteHero = this.appState.deleteHero.bind(this);

    protected openHeroDetail(hero: Hero | null = null) {
        this.router.navigate(['heroes', hero?.id ?? 'new']);
    }
}
