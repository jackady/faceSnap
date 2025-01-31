import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { map, Observable, switchMap } from "rxjs";
import { FaceSnap } from "../../classes/face-snap.class";
import { FaceSnapComponent } from "../../components/face-snap/face-snap.component";
import { faceSnapPath } from "../../constants/face-snap-path.constant";
import { FaceSnapFormModel } from "../../models/face-snap-form.model";
import { FaceSnapService } from "../../services/face-snap.service";

@Component({
    selector: 'app-page-new-resource',
    imports: [
        ReactiveFormsModule,
        FaceSnapComponent
    ],
    templateUrl: './page-new-resource.component.html',
    styleUrl: './page-new-resource.component.scss'
})
export class PageNewResourceComponent implements OnInit {

    private readonly URL_REGEX: RegExp = /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_+.~#?&/=]*)/;

    faceSnapForm!: FormGroup;
    faceSnapPreview$!: Observable<FaceSnap>;

    constructor(private readonly faceSnapsService: FaceSnapService,
                private readonly router: Router,
                private readonly formBuilder: FormBuilder) {
    }

    ngOnInit(): void {
        this.faceSnapForm = this.buildFaceSnapForm();

        this.faceSnapPreview$ = this.faceSnapForm.valueChanges.pipe(
            map(formModel => this.buildFaceSnapWithFormValue(formModel))
        );
    }

    onSubmit(): void {
        const faceSnap = this.buildFaceSnapWithFormValue(this.faceSnapForm.value);

        this.faceSnapsService.addFaceSnap(faceSnap).pipe(
            switchMap(faceSnap => this.router.navigateByUrl(faceSnapPath.resourcePath(faceSnap.id)))
        ).subscribe();
    }

    private buildFaceSnapForm(): FormGroup {
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

    private buildFaceSnapWithFormValue(formModel: FaceSnapFormModel): FaceSnap {
        return new FaceSnap(
            crypto.randomUUID(),
            formModel.title,
            formModel.description,
            formModel.imageUrl,
            new Date(),
            0,
            formModel.location,
            false
        );
    }
}
