import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";

import { Observable } from "rxjs";

import { FaceSnap } from "../../classes/face-snap.class";
import { FaceSnapComponent } from "../../components/face-snap/face-snap.component";
import { FaceSnapService } from "../../services/face-snap.service";

@Component({
    selector: 'app-page-single-view',
    imports: [ FaceSnapComponent ],
    templateUrl: './page-single-view.component.html',
    styleUrl: './page-single-view.component.scss'
})
export class PageSingleViewComponent implements OnInit {

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
