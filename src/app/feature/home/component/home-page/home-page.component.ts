import { Component } from '@angular/core';
import { FormsModule, NgForm } from "@angular/forms";
import { Router } from '@angular/router';

import { faceSnapPath } from "../../../face-snap/constants/face-snap-path.constant";

@Component({
    selector: 'app-home-page',
    imports: [ FormsModule ],
    templateUrl: './home-page.component.html',
    styleUrl: './home-page.component.scss'
})
export class HomePageComponent {

    userEmail: string = 'me@my-house.com';

    constructor(private readonly router: Router) {}

    onNavToFaceSnapListView(): void { this.router.navigateByUrl(faceSnapPath.resourcesPath()); }

    onSubmit(form: NgForm): void { console.log(form.value); }
}
