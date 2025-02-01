import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from "@angular/forms";
import { Router } from "@angular/router";

import { map, Observable, switchMap } from "rxjs";

import { FaceSnap } from "../../classes/face-snap.class";
import { FaceSnapFormComponent } from "../../components/resource-form/face-snap-form.component";
import { FaceSnapComponent } from "../../components/resource/face-snap.component";
import { faceSnapPath } from "../../constants/face-snap-path.constant";
import { FaceSnapFormModel } from "../../models/face-snap-form.model";
import { FaceSnapService } from "../../services/face-snap.service";

@Component({
    selector: 'app-new-face-snap',
    imports: [
        ReactiveFormsModule,
        FaceSnapComponent, FaceSnapFormComponent
    ],
    templateUrl: './page-new-face-snap.component.html',
    styleUrl: './page-new-face-snap.component.scss'
})
export class PageNewFaceSnapComponent implements OnInit {

    faceSnapForm!: FormGroup;
    faceSnapPreview$!: Observable<FaceSnap>;

    constructor(private readonly faceSnapsService: FaceSnapService,
                private readonly router: Router,
                private readonly formBuilder: FormBuilder) {}

    ngOnInit(): void {
        this.faceSnapForm = FaceSnapFormComponent.buildFaceSnapForm(this.formBuilder);

        this.faceSnapPreview$ = this.faceSnapForm.valueChanges.pipe(
            map(formModel => this.buildFaceSnapFromForm(formModel))
        );
    }

    addFaceSnap(): void {
        const faceSnap = this.buildFaceSnapFromForm(this.faceSnapForm.value);

        this.faceSnapsService.addFaceSnap(faceSnap).pipe(
            switchMap(faceSnap => this.router.navigateByUrl(faceSnapPath.resourcePath(faceSnap.id)))
        ).subscribe();
    }

    private buildFaceSnapFromForm(form: FaceSnapFormModel): FaceSnap {
        return new FaceSnap(
            crypto.randomUUID(),
            form.title,
            form.description,
            form.imageUrl,
            new Date(),
            0,
            form.location,
            false
        );
    }
}
