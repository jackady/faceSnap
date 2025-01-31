import { Routes } from '@angular/router';
import { faceSnapRoutes } from "./feature/face-snap/face-snap.routes";
import { HomePageComponent } from './feature/home/component/home-page/home-page.component';

export const appRoutes: Routes = [
    ...faceSnapRoutes,
    { path: '', component: HomePageComponent }
];
