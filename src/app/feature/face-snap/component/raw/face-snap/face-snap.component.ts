import { AsyncPipe, DatePipe, NgClass, NgIf, NgStyle, TitleCasePipe } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { Observable, tap } from "rxjs";
import { SnapButtonText } from '../../../constant/snap-button-text.const';
import { SnapActionEnum } from '../../../enum/snap-action.enum';
import { FaceSnapModel } from '../../../models/face-snap.model';
import { FaceSnapsService } from "../../../services/face-snaps.service";

@Component({
    selector: 'app-face-snap',
    imports: [
        NgClass,
        NgStyle,
        TitleCasePipe,
        DatePipe,
        NgIf,
        AsyncPipe
    ],
    templateUrl: './face-snap.component.html',
    styleUrl: './face-snap.component.scss'
})
export class FaceSnapComponent implements OnInit {

    @Input() faceSnap$!: Observable<FaceSnapModel>;

    isSnapped!: boolean | undefined
    snapButtonText!: string;

    constructor(private readonly faceSnapsService: FaceSnapsService) {
    }

    ngOnInit(): void {
        this.faceSnap$ = this.faceSnap$.pipe(
            tap(faceSnap => this.refreshComponent(faceSnap))
        );
    }

    onSnap(faceSnapId: string): void {
        this.isSnapped ?
            this.snap(faceSnapId, SnapActionEnum.UNSNAP) :
            this.snap(faceSnapId, SnapActionEnum.SNAP);
    }


    snap(faceSnapId: string, snapAction: SnapActionEnum): void {
        this.faceSnap$ = this.faceSnapsService.snapById(faceSnapId, snapAction).pipe(
            tap(faceSnap => this.refreshComponent(faceSnap))
        );
    }

    private refreshComponent(faceSnap: FaceSnapModel) {
        this.isSnapped = faceSnap.isSnapped;
        this.snapButtonText = this.isSnapped ? SnapButtonText.SNAPPED : SnapButtonText.UNSNAPPED;
    }

}
