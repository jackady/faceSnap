import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { Provider } from "@angular/core";
import { AuthenticationInterceptor } from "../interceptor/authentication.interceptor";

export const httpInterceptorProviders: Provider = [
    { provide: HTTP_INTERCEPTORS, useClass: AuthenticationInterceptor, multi: true }
];