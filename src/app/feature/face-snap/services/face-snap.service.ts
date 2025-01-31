import { Injectable } from '@angular/core';

import { map, Observable, OperatorFunction } from "rxjs";

import { HttpService } from "../../../core/service/http.service";
import { FaceSnap } from '../classes/face-snap.class';
import { faceSnapPath } from "../constants/face-snap-path.constant";
import { SnapActionEnum } from "../enums/snap-action.enum";
import { FaceSnapModel } from "../models/face-snap.model";

@Injectable({ providedIn: 'root' })
export class FaceSnapService {

    constructor(private readonly httpService: HttpService) {}

    public getFaceSnaps(): Observable<FaceSnap[]> {
        return this.httpService.getResources<FaceSnapModel>(faceSnapPath.resourcesPath())
            .pipe(this.mapModelsToFaceSnaps());
    }

    public getFaceSnapById(faceSnapId: string): Observable<FaceSnap> {
        return this.httpService.getResource<FaceSnapModel>(faceSnapPath.resourcePath(faceSnapId))
            .pipe(this.mapModelToFaceSnap());
    }

    public addFaceSnap(faceSnap: FaceSnap): Observable<FaceSnap> {
        return this.httpService.postResource<FaceSnapModel>(faceSnapPath.resourcesPath(), faceSnap)
            .pipe(this.mapModelToFaceSnap());
    }

    public snapFaceSnap(faceSnap: FaceSnap, snapAction: SnapActionEnum): Observable<FaceSnap> {
        return this.httpService.putResource<FaceSnapModel>(faceSnapPath.resourcePath(faceSnap.id), faceSnap.snap(snapAction))
            .pipe(this.mapModelToFaceSnap());
    }

    private mapModelsToFaceSnaps(): OperatorFunction<FaceSnapModel[], FaceSnap[]> {
        return map((models: FaceSnapModel[]) => models.map(this.buildFaceSnap()));
    }

    private mapModelToFaceSnap(): OperatorFunction<FaceSnapModel, FaceSnap> {
        return map(this.buildFaceSnap());
    }

    private buildFaceSnap() {
        return (model: FaceSnapModel) =>
            new FaceSnap(model.id,
                model.title,
                model.description,
                model.imageUrl,
                model.creationDate,
                model.snaps,
                model.location,
                model.isSnapped ? model.isSnapped : false);
    }
}
