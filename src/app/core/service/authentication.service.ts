import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class AuthenticationService {

    private readonly token: string = 'MyFakeToken';

    public getToken(): string { return this.token; }
}