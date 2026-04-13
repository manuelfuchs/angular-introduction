import {
    Component,
    DestroyRef,
    effect,
    inject,
    input,
    signal,
} from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { FormLabelComponent } from './form-label.component';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { NgClass } from '@angular/common';

@Component({
    selector: 'app-input-text',
    imports: [ReactiveFormsModule, FormLabelComponent, NgClass],
    template: `
        <div class="flex flex-col">
            <app-form-label
                for="formField"
                [control]="control()"
                [label]="label()"
            />

            <input
                id="formField"
                [formControl]="control()"
                type="text"
                class="border px-2 py-1 rounded-sm"
                [ngClass]="
                    isInvalid()
                        ? 'border-red-500 focus:ring-red-600'
                        : 'border-neutral-500'
                "
            />
        </div>
    `,
})
export class InputTextComponent {
    private readonly destroyRef = inject(DestroyRef);

    public readonly control = input.required<FormControl<string>>();
    public readonly label = input.required<string>();

    protected readonly isInvalid = signal(false);

    constructor() {
        // Setup isInvalid value propagation
        effect(() => {
            const control = this.control();

            this.updateIsInvalid(control);

            control.statusChanges
                .pipe(takeUntilDestroyed(this.destroyRef))
                .subscribe(() => this.updateIsInvalid(control));
        });
    }

    private updateIsInvalid(control: FormControl<string>): void {
        this.isInvalid.set(control.invalid);

        console.log('isInvalid:', this.isInvalid());
    }
}
