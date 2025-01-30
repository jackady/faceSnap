import { NgClass, TitleCasePipe } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { FaceSnapModel } from '../../../models/face-snap.model';

@Component({
    selector: 'app-face-snaps-list-element',
    imports: [
        NgClass,
        TitleCasePipe
    ],
    templateUrl: './face-snaps-list-element.component.html',
    styleUrl: './face-snaps-list-element.component.scss'
})
export class FaceSnapsListElementComponent {

    @Input() faceSnap!: FaceSnapModel;

    constructor(private readonly router: Router) {
    }

    navigateToFaceSnap() {
        this.router.navigateByUrl(`facesnaps/${ this.faceSnap.id }`);
    }
}
