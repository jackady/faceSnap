import { AsyncPipe, NgForOf } from "@angular/common";
import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs";
import { FaceSnapModel } from '../../../models/face-snap.model';
import { FaceSnapsService } from '../../../services/face-snaps.service';
import { FaceSnapsListElementComponent } from "../../raw/face-snaps-list-element/face-snaps-list-element.component";

@Component({
    selector: 'app-face-snaps-page',
    imports: [
        FaceSnapsListElementComponent,
        AsyncPipe,
        NgForOf
    ],
    templateUrl: './face-snaps-page.component.html',
    styleUrl: './face-snaps-page.component.scss'
})
export class FaceSnapsPageComponent implements OnInit {

    faceSnaps$!: Observable<FaceSnapModel[]>;

    constructor(private readonly faceSnapService: FaceSnapsService) {
    }

    ngOnInit(): void {
        this.faceSnaps$ = this.faceSnapService.getFaceSnaps();
    }
}
