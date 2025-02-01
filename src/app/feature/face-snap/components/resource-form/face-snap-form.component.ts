import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from "@angular/forms";

import { FaceSnapFormModel } from "../../models/face-snap-form.model";

@Component({
    selector: 'app-face-snap-form',
    imports: [ ReactiveFormsModule ],
    templateUrl: './face-snap-form.component.html',
    styleUrl: './face-snap-form.component.scss'
})
export class FaceSnapFormComponent {

    private static readonly URL_REGEX: RegExp = /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_+.~#?&/=]*)/;

    @Input() faceSnapForm!: FormGroup;

    @Output() formSubmitEvent: EventEmitter<FaceSnapFormModel> = new EventEmitter<FaceSnapFormModel>();

    onSubmit(): void { this.formSubmitEvent.emit(); }

    public static buildFaceSnapForm(formBuilder: FormBuilder): FormGroup {
        return formBuilder.group({
            title: [ null, [ Validators.required ] ],
            description: [ null, [ Validators.required ] ],
            imageUrl: [ null, {
                validators: [ Validators.required, Validators.pattern(this.URL_REGEX) ],
                updateOn: 'blur'
            } ],
            location: [ null ]
        });
    }
}
