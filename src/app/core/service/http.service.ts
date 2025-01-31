import { HttpClient } from "@angular/common/http";
import { Injectable } from '@angular/core';
import { Observable } from "rxjs";

@Injectable({ providedIn: 'root' })
export class HttpService {

    private readonly BASE_URL: string = 'http://localhost:3000';

    constructor(private readonly httpClient: HttpClient) {}

    public getResources<ResourceModel>(path: string): Observable<ResourceModel[]> {
        return this.httpClient.get<ResourceModel[]>(this.getUrl(path));
    }

    public getResource<ResourceModel>(path: string): Observable<ResourceModel> {
        return this.httpClient.get<ResourceModel>(this.getUrl(path));
    }

    public putResource<ResourceModel>(path: string, updatedResource: ResourceModel): Observable<ResourceModel> {
        return this.httpClient.put<ResourceModel>(this.getUrl(path), updatedResource);
    }

    public postResource<ResourceModel>(path: string, resource: ResourceModel): Observable<ResourceModel> {
        return this.httpClient.post<ResourceModel>(this.getUrl(path), resource);
    }

    private getUrl(path: string): string {
        return `${ this.BASE_URL }/${ path }`;
    }
}
