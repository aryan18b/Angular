import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  constructor(private httpClient: HttpClient) { }
  
  apiUrl = `${environment.baseUrl}/auth`
  
  login(credentials: any): Observable<any> {
    const loginUrl = `${this.apiUrl}/login`
    return this.httpClient.post<any>(loginUrl, credentials);
  }
}
