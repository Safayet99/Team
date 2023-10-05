import { Injectable } from '@angular/core';
import { Blog } from './blog';
import { Team } from './team';
import { Icon } from './icon';

import { Observable } from 'rxjs';

import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class ApiService {
    PHP_API_SERVER = "http://localhost/angularcrud/api";
    constructor(private httpClient: HttpClient) { }
    readBlog(): Observable<Blog[]> {
        return this.httpClient.get<Blog[]>(`${this.PHP_API_SERVER}/blog.php`);
    }
    readTeam(): Observable<Team[]> {
        return this.httpClient.get<Team[]>(`${this.PHP_API_SERVER}/team.php`);
    }
    readIcon(): Observable<Icon[]> {
        return this.httpClient.get<Icon[]>(`${this.PHP_API_SERVER}/icon.php`);
    }
    
}
