import { Routes } from '@angular/router';

import { faceSnapPath } from "./constants/face-snap-path.constant";
import { PageListViewComponent } from "./pages/page-list-view/page-list-view.component";
import { PageNewResourceComponent } from './pages/page-new-resource/page-new-resource.component';

import { PageSingleViewComponent } from "./pages/page-single-view/page-single-view.component";

export const faceSnapRoutes: Routes = [
    { path: faceSnapPath.newResourcePath(), component: PageNewResourceComponent },
    { path: `${ faceSnapPath.resourcesPath() }/:id`, component: PageSingleViewComponent },
    { path: faceSnapPath.resourcesPath(), component: PageListViewComponent }
];
