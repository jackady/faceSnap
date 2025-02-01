import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";

import { Observable } from "rxjs";

import { FaceSnap } from "../../classes/face-snap.class";
import { FaceSnapComponent } from "../../components/resource/face-snap.component";
import { FaceSnapService } from "../../services/face-snap.service";

@Component({
    selector: 'app-page-face-snap-view',
    imports: [ FaceSnapComponent ],
    templateUrl: './page-face-snap-view.component.html',
    styleUrl: './page-face-snap-view.component.scss'
})
export class PageFaceSnapViewComponent implements OnInit {

    faceSnap$!: Observable<FaceSnap>;

    constructor(private readonly faceSnapService: FaceSnapService,
                private readonly activatedRoute: ActivatedRoute) {
    }

    ngOnInit(): void { this.faceSnap$ = this.getFaceSnap(); }

    private getFaceSnap(): Observable<FaceSnap> {
        const faceSnapId: string = this.activatedRoute.snapshot.params['id'];
        return this.faceSnapService.getFaceSnapById(faceSnapId);
    }
}
