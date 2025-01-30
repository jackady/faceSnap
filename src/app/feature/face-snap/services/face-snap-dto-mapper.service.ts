import { Injectable } from '@angular/core';
import { FaceSnapDto } from "../models/face-snap-dto.model";
import { FaceSnapModel } from "../models/face-snap.model";

@Injectable({ providedIn: 'root' })
export class FaceSnapDtoMapperService {

    public mapDtoToModel(dto: FaceSnapDto): FaceSnapModel {
        return new FaceSnapModel(
            dto.id,
            dto.title,
            dto.description,
            dto.imageUrl,
            dto.creationDate,
            dto.snaps,
            dto.location,
            dto.isSnapped ? dto.isSnapped : false,
        );
    }

    public mapModelToDto(model: FaceSnapModel): FaceSnapDto {
        return new FaceSnapDto(
            model.id,
            model.title,
            model.description,
            model.imageUrl,
            model.creationDate,
            model.snaps,
            model.location,
            model.isSnapped,
        );
    }
}
