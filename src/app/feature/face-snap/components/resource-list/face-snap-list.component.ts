import { AsyncPipe, NgForOf } from '@angular/common';
import { Component, Input } from '@angular/core';

import { Observable } from "rxjs";

import { FaceSnap } from '../../classes/face-snap.class';
import { FaceSnapLightComponent } from "../resource-light/face-snap-light.component";

@Component({
    selector: 'app-face-snap-list',
    imports: [
        NgForOf,
        AsyncPipe,
        FaceSnapLightComponent
    ],
    templateUrl: './face-snap-list.component.html',
    styleUrl: './face-snap-list.component.scss'
})
export class FaceSnapListComponent {

    @Input() faceSnapList$!: Observable<FaceSnap[]>;

}
