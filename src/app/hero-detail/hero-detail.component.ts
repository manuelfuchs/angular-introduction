import { Component, effect, inject, input } from '@angular/core';
import { createHeroDetailForm } from './hero-detail-form.type';
import { NonNullableFormBuilder } from '@angular/forms';
import { AppState } from '../shared/app.state';

@Component({
    selector: 'app-hero-detail',
    template: `
        <div class="flex flex-col">
            <span>hero-detail</span>
            <span>{{ heroId() }}</span>
            <span>{{ form.controls.name.value }}</span>
        </div>
    `,
})
export default class HeroDetailComponent {
    private readonly fb = inject(NonNullableFormBuilder);
    private readonly appState = inject(AppState);

    public readonly heroId = input<string>();

    protected readonly form = createHeroDetailForm(this.fb);

    constructor() {
        // Initialize form with existing hero data
        effect(() => {
            const heroId = this.heroId();
            if (heroId === undefined) {
                return;
            }

            const hero = this.appState
                .heroes()
                .find((h) => `${h.id}` === heroId);
            if (hero === undefined) {
                return;
            }

            this.form.patchValue({
                name: hero.name,
            });
        });
    }
}
