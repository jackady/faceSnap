import { NgClass, TitleCasePipe } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

import { FaceSnap } from '../../classes/face-snap.class';
import { faceSnapPath } from "../../constants/face-snap-path.constant";

@Component({
    selector: 'app-face-snap-light',
    imports: [
        NgClass,
        TitleCasePipe
    ],
    templateUrl: './face-snap-light.component.html',
    styleUrl: './face-snap-light.component.scss'
})
export class FaceSnapLightComponent {

    @Input() faceSnap!: FaceSnap;

    constructor(private readonly router: Router) {}

    navigateToFaceSnap(): void { this.router.navigateByUrl(faceSnapPath.resourcePath(this.faceSnap.id)); }

}
