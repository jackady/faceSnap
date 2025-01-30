import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { Observable } from "rxjs";
import { FaceSnapModel } from "../../../models/face-snap.model";
import { FaceSnapsService } from "../../../services/face-snaps.service";
import { FaceSnapComponent } from "../../raw/face-snap/face-snap.component";

@Component({
    selector: 'app-face-snap-page',
    imports: [
        FaceSnapComponent
    ],
    templateUrl: './face-snap-page.component.html',
    styleUrl: './face-snap-page.component.scss'
})
export class FaceSnapPageComponent implements OnInit {

    faceSnap$!: Observable<FaceSnapModel>;

    constructor(private readonly faceSnapService: FaceSnapsService,
                private readonly activatedRoute: ActivatedRoute) {
    }

    ngOnInit(): void {
        this.faceSnap$ = this.getFaceSnap();
    }

    private getFaceSnap(): Observable<FaceSnapModel> {
        const faceSnapId: string = this.activatedRoute.snapshot.params['id'];
        return this.faceSnapService.getFaceSnapById(faceSnapId);
    }
}
