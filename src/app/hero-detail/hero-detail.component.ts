import { Component, effect, input } from '@angular/core';

@Component({
    selector: 'app-hero-detail',
    template: 'hero-detail {{ heroId() }}',
})
export default class HeroDetailComponent {
    public readonly heroId = input<number>();

    constructor() {
        effect(() => {
            console.log('Hero ID:', this.heroId());
        });
    }
}
