import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';

@Injectable()
export class BlogService {
  constructor(private httpClient: HttpClient) { }
  
  apiUrl = `${environment.baseUrl}/posts`
  
  getBlogs() : Observable<any[]> {
    return this.httpClient.get<any[]>(this.apiUrl);
  }
}