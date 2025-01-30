import { Routes } from '@angular/router';
import { FaceSnapPageComponent } from "./feature/face-snap/component/page/face-snap-page/face-snap-page.component";
import { FaceSnapsPageComponent } from './feature/face-snap/component/page/face-snaps-page/face-snaps-page.component';
import {
    NewFaceSnapPageComponent
} from "./feature/face-snap/component/page/new-face-snap-page/new-face-snap-page.component";
import { HomePageComponent } from './feature/home/component/home-page/home-page.component';

export const routes: Routes = [
    { path: 'facesnaps/create', component: NewFaceSnapPageComponent },
    { path: 'facesnaps/:id', component: FaceSnapPageComponent },
    { path: 'facesnaps', component: FaceSnapsPageComponent },
    { path: '', component: HomePageComponent }
];
