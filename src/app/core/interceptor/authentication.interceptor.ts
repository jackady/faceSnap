import { HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthenticationService } from "../service/authentication.service";

@Injectable()
export class AuthenticationInterceptor implements HttpInterceptor {

    constructor(private readonly authenticationService: AuthenticationService) {
    }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const headers: HttpHeaders = new HttpHeaders().append(
            'Authorization',
            `Bearer ${ this.authenticationService.getToken() }`
        );

        const modifiedReq: HttpRequest<any> = req.clone({ headers });

        return next.handle(modifiedReq);
    }
}