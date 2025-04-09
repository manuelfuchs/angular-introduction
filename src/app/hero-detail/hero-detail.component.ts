import { Component, effect, inject, input } from '@angular/core';
import { createHeroDetailForm } from './hero-detail-form.type';
import { NonNullableFormBuilder } from '@angular/forms';
import { AppState } from '../shared/services/app.state';

@Component({
    selector: 'app-hero-detail',
    template: `
        {{ form.controls.name.value }}
    `
})
export default class HeroDetailComponent {
    private readonly fb = inject(NonNullableFormBuilder);
    private readonly appState = inject(AppState);

    public readonly heroId = input<string>();

    protected readonly form = createHeroDetailForm(this.fb);

    constructor() {
        effect(() => {
            const heroId = this.heroId();
            if (heroId === undefined) {
                return;
            }

            const hero = this.appState.getHeroById(heroId);
            if (hero === null) {
                return;
            }

            this.form.patchValue({
                name: hero.name
            });
            this.form.markAsPristine();
        });
    }
}
