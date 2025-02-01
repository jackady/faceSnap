import { Component, OnInit } from '@angular/core';

import { Observable } from "rxjs";

import { FaceSnap } from '../../classes/face-snap.class';
import { FaceSnapListComponent } from "../../components/resource-list/face-snap-list.component";
import { FaceSnapService } from '../../services/face-snap.service';

@Component({
    selector: 'app-page-face-snap-list-view',
    imports: [ FaceSnapListComponent ],
    templateUrl: './page-face-snap-list-view.component.html',
    styleUrl: './page-face-snap-list-view.component.scss'
})
export class PageFaceSnapListViewComponent implements OnInit {

    faceSnapList$!: Observable<FaceSnap[]>;

    constructor(private readonly faceSnapService: FaceSnapService) {}

    ngOnInit(): void { this.faceSnapList$ = this.faceSnapService.getFaceSnaps(); }
}
