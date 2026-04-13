import {
    FormControl,
    FormGroup,
    NonNullableFormBuilder,
    Validators,
} from '@angular/forms';

export interface HeroDetailForm {
    name: FormControl<string>;
    test: FormControl<string>;
}

export function createHeroDetailForm(
    fb: NonNullableFormBuilder
): FormGroup<HeroDetailForm> {
    const form = fb.group<HeroDetailForm>({
        name: fb.control('', [Validators.required, Validators.minLength(3)]),
        test: fb.control(''),
    });

    // form.controls.test.valueChanges.subscribe((v) =>
    //     console.log('value change:', v)
    // );

    return form;
}
