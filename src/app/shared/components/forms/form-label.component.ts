import {
    Component,
    input,
    signal,
    OnInit,
    DestroyRef,
    inject,
} from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { AbstractControl, Validators } from '@angular/forms';

@Component({
    selector: 'app-form-label',
    template: `
        <label [for]="for()" class="select-none text-sm text-neutral-600"
            >{{ label() }}
            @if (isRequired()) {
            <span class="text-red-500">*</span>
            }
        </label>
    `,
})
export class FormLabelComponent implements OnInit {
    private readonly destroyRef = inject(DestroyRef);

    public readonly control = input.required<AbstractControl<unknown>>();
    public readonly label = input.required<string>();
    public readonly for = input.required<string>();

    protected readonly isRequired = signal(false);

    public ngOnInit(): void {
        this.updateIsRequired();

        this.control()
            .statusChanges.pipe(takeUntilDestroyed(this.destroyRef))
            .subscribe(() => this.updateIsRequired());
    }

    private updateIsRequired(): void {
        this.isRequired.set(this.control().hasValidator(Validators.required));
    }
}
