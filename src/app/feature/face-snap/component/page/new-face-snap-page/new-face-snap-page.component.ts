import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { map, Observable, switchMap } from "rxjs";
import { FaceSnapModel } from "../../../models/face-snap.model";
import { FaceSnapsService } from "../../../services/face-snaps.service";
import { FaceSnapFormType } from "../../../types/face-snap-form.type";
import { FaceSnapComponent } from "../../raw/face-snap/face-snap.component";

@Component({
    selector: 'app-new-face-snap-page',
    imports: [
        ReactiveFormsModule,
        FaceSnapComponent
    ],
    templateUrl: './new-face-snap-page.component.html',
    styleUrl: './new-face-snap-page.component.scss'
})
export class NewFaceSnapPageComponent implements OnInit {

    private readonly URL_REGEX: RegExp = /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_+.~#?&/=]*)/;

    faceSnapForm!: FormGroup;
    faceSnapPreview$!: Observable<FaceSnapModel>;

    constructor(
        private readonly faceSnapsService: FaceSnapsService,
        private readonly router: Router,
        private readonly formBuilder: FormBuilder) {
    }

    ngOnInit(): void {
        this.faceSnapForm = this.buildFaceSnapForm();

        this.faceSnapPreview$ = this.faceSnapForm.valueChanges.pipe(
            map(formValues => this.buildFaceSnapWithFormValue(formValues))
        );
    }

    onSubmit() {
        const faceSnap = this.buildFaceSnapWithFormValue(this.faceSnapForm.value);

        this.faceSnapsService.addFaceSnap(faceSnap).pipe(
            switchMap(response => this.router.navigateByUrl(`facesnaps/${ faceSnap.id }`))
        ).subscribe();
    }

    private buildFaceSnapForm() {
        return this.formBuilder.group({
            title: [ null, [ Validators.required ] ],
            description: [ null, [ Validators.required ] ],
            imageUrl: [ null, {
                validators: [ Validators.required, Validators.pattern(this.URL_REGEX) ],
                updateOn: 'blur'
            } ],
            location: [ null ]
        });
    }

    private buildFaceSnapWithFormValue(formValue: FaceSnapFormType): FaceSnapModel {
        return new FaceSnapModel(
            crypto.randomUUID(),
            formValue.title,
            formValue.description,
            formValue.imageUrl,
            new Date(),
            0,
            formValue.location,
            false
        );
    }
}
