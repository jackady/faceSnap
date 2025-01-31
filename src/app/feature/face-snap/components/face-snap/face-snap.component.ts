import { AsyncPipe, DatePipe, NgClass, NgIf, NgStyle, TitleCasePipe } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';

import { MonoTypeOperatorFunction, Observable, tap } from "rxjs";
import { FaceSnap } from '../../classes/face-snap.class';

import { SnapActionEnum } from '../../enums/snap-action.enum';
import { FaceSnapService } from "../../services/face-snap.service";

@Component({
    selector: 'app-face-snap',
    imports: [
        NgIf, NgClass, NgStyle,
        AsyncPipe, TitleCasePipe, DatePipe
    ],
    templateUrl: './face-snap.component.html',
    styleUrl: './face-snap.component.scss'
})
export class FaceSnapComponent implements OnInit {

    @Input() faceSnap$!: Observable<FaceSnap>;

    snapButtonText!: string;

    constructor(private readonly faceSnapsService: FaceSnapService) {}

    ngOnInit(): void { this.faceSnap$ = this.faceSnap$.pipe(this.refreshComponent()); }

    public onSnap(faceSnap: FaceSnap): void {
        faceSnap.isSnapped ? this.snap(faceSnap, SnapActionEnum.UNSNAP) : this.snap(faceSnap, SnapActionEnum.SNAP);
    }

    private snap(faceSnap: FaceSnap, snapAction: SnapActionEnum): void {
        this.faceSnap$ = this.faceSnapsService.snapFaceSnap(faceSnap, snapAction).pipe(this.refreshComponent());
    }

    private refreshComponent(): MonoTypeOperatorFunction<FaceSnap> {
        return tap(faceSnap =>
            this.snapButtonText = faceSnap.isSnapped ? SnapActionEnum.SNAP : SnapActionEnum.UNSNAP);
    }
}
