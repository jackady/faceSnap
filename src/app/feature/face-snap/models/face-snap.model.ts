import { SnapActionEnum } from '../enum/snap-action.enum';

export class FaceSnapModel {

    constructor(
        private readonly _id: string,
        private readonly _title: string,
        private readonly _description: string,
        private readonly _imageUrl: string,
        private readonly _creationDate: Date,
        private _snaps: number,
        private readonly _location?: string,
        private _isSnapped?: boolean
    ) {
    }

    public snap(snapAction: SnapActionEnum): this {
        switch (snapAction) {
            case SnapActionEnum.SNAP:
                this._snaps++;
                this._isSnapped = true;
                break;

            case SnapActionEnum.UNSNAP:
                this._snaps--;
                this._isSnapped = false;
                break;

            default:
        }

        return this;
    }

    // Getters

    public get id(): string {
        return this._id;
    }

    public get title(): string {
        return this._title;
    }

    public get description(): string {
        return this._description;
    }

    public get imageUrl(): string {
        return this._imageUrl;
    }

    public get creationDate(): Date {
        return this._creationDate;
    }

    public get snaps(): number {
        return this._snaps;
    }

    public get location(): string | undefined {
        return this._location;
    }

    public get isSnapped(): boolean | undefined {
        return this._isSnapped;
    }

    // Setters

    public set snaps(value: number) {
        this._snaps = value;
    }

    public set isSnapped(value: boolean) {
        this._isSnapped = value;
    }

}
