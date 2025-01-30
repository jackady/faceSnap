export class FaceSnapDto {

    constructor(
        public id: string,
        public title: string,
        public description: string,
        public imageUrl: string,
        public creationDate: Date,
        public snaps: number,
        public location?: string,
        public isSnapped?: boolean
    ) {
    }
}
