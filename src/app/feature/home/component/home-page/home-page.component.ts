import { Component } from '@angular/core';
import { FormsModule, NgForm } from "@angular/forms";
import { Router } from '@angular/router';

@Component({
    selector: 'app-home-page',
    imports: [
        FormsModule
    ],
    templateUrl: './home-page.component.html',
    styleUrl: './home-page.component.scss'
})
export class HomePageComponent {

    userEmail: string = 'me@my-house.com';

    constructor(private readonly router: Router) {
    }

    onNavigateTo(url: string): void {
        this.router.navigateByUrl(url);
    }

    onSubmit(form: NgForm): void {
        console.log(form.value);
    }
}
