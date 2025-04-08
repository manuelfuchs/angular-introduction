import { inject, Injectable, signal, Signal } from '@angular/core';
import { defaultHeroes, Hero } from './models';

@Injectable({
    providedIn: 'root',
    useFactory: () => inject(AppStateModel),
})
export abstract class AppState {
    public abstract readonly heroes: Signal<Hero[]>;

    public abstract deleteHero(hero: Hero): void;
}

@Injectable({
    providedIn: 'root',
})
class AppStateModel implements AppState {
    public readonly heroes = signal(defaultHeroes);

    public deleteHero(hero: Hero): void {
        this.heroes.update((heroes) => heroes.filter((h) => h.id !== hero.id));
    }
}
