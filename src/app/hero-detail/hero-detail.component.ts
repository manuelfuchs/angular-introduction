import { Component, effect, inject, input } from '@angular/core';
import { createHeroDetailForm } from './hero-detail-form.type';
import { NonNullableFormBuilder, ReactiveFormsModule } from '@angular/forms';
import { AppState } from '../shared/app.state';
import { InputTextComponent } from '../shared/components/forms/input-text.component';

@Component({
    selector: 'app-hero-detail',
    imports: [ReactiveFormsModule, InputTextComponent],
    template: `
        <form
            [formGroup]="form"
            (ngSubmit)="handleSubmit()"
            class="flex flex-col gap-3"
        >
            <app-input-text [control]="form.controls.name" label="Name" />

            <button
                type="submit"
                class="bg-purple-500 text-white py-2 rounded-lg"
            >
                Speichern
            </button>
        </form>

        <input
            id="myInputList"
            list="valueList"
            type="text"
            [formControl]="form.controls.test"
        />
        <datalist id="valueList">
            <option value="Option 1"></option>
            <option value="Badminton"></option>
        </datalist>
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

    protected handleSubmit(): void {
        this.form.markAllAsTouched();
        if (this.form.invalid) {
            return;
        }

        console.log('valid and can be submitted');
    }
}
