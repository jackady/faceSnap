import { SnapActionEnum } from "../enums/snap-action.enum";
import { FaceSnapModel } from "../models/face-snap.model";

export class FaceSnap implements FaceSnapModel {

    snaps!: number;
    isSnapped?: boolean;

    constructor(
        readonly id: string,
        readonly title: string,
        readonly description: string,
        readonly imageUrl: string,
        readonly creationDate: Date,
        snaps: number,
        readonly location?: string | undefined,
        isSnapped?: boolean | undefined
    ) {
        this.snaps = snaps;
        this.isSnapped = isSnapped;
    }

    public snap(snapAction: SnapActionEnum): this {
        switch (snapAction) {
            case SnapActionEnum.SNAP:
                this.snaps++;
                this.isSnapped = true;
                break;

            case SnapActionEnum.UNSNAP:
                this.snaps--;
                this.isSnapped = false;
                break;

            default:
        }

        return this;
    }

}
