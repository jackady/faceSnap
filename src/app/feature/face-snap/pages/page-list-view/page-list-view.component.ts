import { AsyncPipe, NgForOf } from "@angular/common";
import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs";
import { FaceSnap } from '../../classes/face-snap.class';
import {
    FaceSnapsListElementComponent
} from "../../components/face-snaps-list-element/face-snaps-list-element.component";
import { FaceSnapService } from '../../services/face-snap.service';

@Component({
    selector: 'app-page-list-view',
    imports: [
        NgForOf,
        AsyncPipe,
        FaceSnapsListElementComponent
    ],
    templateUrl: './page-list-view.component.html',
    styleUrl: './page-list-view.component.scss'
})
export class PageListViewComponent implements OnInit {

    faceSnaps$!: Observable<FaceSnap[]>;

    constructor(private readonly faceSnapService: FaceSnapService) {}

    ngOnInit(): void { this.faceSnaps$ = this.faceSnapService.getFaceSnaps(); }
}
