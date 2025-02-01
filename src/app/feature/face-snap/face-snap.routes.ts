import { Routes } from '@angular/router';

import { faceSnapPath } from "./constants/face-snap-path.constant";
import { PageFaceSnapListViewComponent } from "./pages/page-list-view/page-face-snap-list-view.component";
import { PageNewFaceSnapComponent } from './pages/page-new-resource/page-new-face-snap.component';

import { PageFaceSnapViewComponent } from "./pages/page-single-view/page-face-snap-view.component";

export const faceSnapRoutes: Routes = [
    { path: faceSnapPath.newResourcePath(), component: PageNewFaceSnapComponent },
    { path: `${ faceSnapPath.resourcesPath() }/:id`, component: PageFaceSnapViewComponent },
    { path: faceSnapPath.resourcesPath(), component: PageFaceSnapListViewComponent }
];
