import { NgClass, TitleCasePipe } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { FaceSnap } from '../../classes/face-snap.class';
import { faceSnapPath } from "../../constants/face-snap-path.constant";

@Component({
    selector: 'app-face-snaps-list-element',
    imports: [ NgClass, TitleCasePipe ],
    templateUrl: './face-snaps-list-element.component.html',
    styleUrl: './face-snaps-list-element.component.scss'
})
export class FaceSnapsListElementComponent {

    @Input() faceSnap!: FaceSnap;

    constructor(private readonly router: Router) {}

    navigateToFaceSnap() { this.router.navigateByUrl(faceSnapPath.resourcePath(this.faceSnap.id)); }
}
