import { HttpClient } from "@angular/common/http";
import { Injectable } from '@angular/core';
import { map, Observable, switchMap } from "rxjs";
import { SnapActionEnum } from "../enum/snap-action.enum";
import { FaceSnapDto } from "../models/face-snap-dto.model";
import { FaceSnapModel } from '../models/face-snap.model';
import { FaceSnapDtoMapperService } from "./face-snap-dto-mapper.service";

@Injectable({ providedIn: 'root' })
export class FaceSnapsService {

    constructor(
        private readonly dtoMapperService: FaceSnapDtoMapperService,
        private readonly httpClient: HttpClient
    ) {
    }

    getFaceSnaps(): Observable<FaceSnapModel[]> {
        return this.httpClient.get<FaceSnapDto[]>('http://localhost:3000/facesnaps').pipe(
            map(faceSnaps => faceSnaps.map(
                    faceSnap => this.dtoMapperService.mapDtoToModel(faceSnap)
                )
            )
        );
    }

    getFaceSnapById(faceSnapId: string): Observable<FaceSnapModel> {
        return this.httpClient.get<FaceSnapModel>(`http://localhost:3000/facesnaps/${ faceSnapId }`).pipe(
            map(faceSnap => this.dtoMapperService.mapDtoToModel(faceSnap))
        );
    }

    snapById(faceSnapId: string, snapAction: SnapActionEnum): Observable<FaceSnapModel> {
        return this.getFaceSnapById(faceSnapId).pipe(
            map(faceSnap => faceSnap.snap(snapAction)),
            map(faceSnap => this.dtoMapperService.mapModelToDto(faceSnap)),
            switchMap(
                updatedFaceSnap => this.httpClient.put<FaceSnapModel>(
                    `http://localhost:3000/facesnaps/${ faceSnapId }`,
                    updatedFaceSnap)
            )
        );
    }

    addFaceSnap(faceSnap: FaceSnapModel): Observable<FaceSnapModel> {
        return this.httpClient.post<FaceSnapModel>(
            'http://localhost:3000/facesnaps',
            this.dtoMapperService.mapModelToDto(faceSnap)
        );
    }
}
