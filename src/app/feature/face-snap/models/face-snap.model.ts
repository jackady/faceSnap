import { SnapActionEnum } from "../enums/snap-action.enum";

export interface FaceSnapModel {

    readonly id: string;
    readonly title: string;
    readonly description: string;
    readonly imageUrl: string;
    readonly creationDate: Date;
    snaps: number;

    readonly location?: string;
    isSnapped?: boolean;

    snap: (snapAction: SnapActionEnum) => this;

}
