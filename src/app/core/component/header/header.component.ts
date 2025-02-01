import { Component } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { faceSnapPath } from "../../../feature/face-snap/constants/face-snap-path.constant";

@Component({
    selector: 'app-header',
    imports: [ RouterLink, RouterLinkActive ],
    templateUrl: './header.component.html',
    styleUrl: './header.component.scss'
})
export class HeaderComponent {

    protected readonly faceSnapPath = faceSnapPath;

    constructor(private readonly router: Router) {}

    public onNavigateToNewResource(): void { this.router.navigateByUrl(faceSnapPath.newResourcePath()); }
}
