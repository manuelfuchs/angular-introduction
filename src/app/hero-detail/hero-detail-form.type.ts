import { FormControl, FormGroup, NonNullableFormBuilder, Validators } from '@angular/forms';

export interface HeroDetailForm {
    name: FormControl<string>;
}

export function createHeroDetailForm(fb: NonNullableFormBuilder): FormGroup<HeroDetailForm> {
    return fb.group<HeroDetailForm>({
        name: fb.control('', [Validators.required, Validators.minLength(3)])
    });
}
