import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

const apiUrl = environment.apiUrl;

@Injectable({
  providedIn: 'root',
})
export class RestService {
  constructor(private http: HttpClient) {}

  get<T>(path: string): Observable<T> {
    return this.http.get<T>(apiUrl + path);
  }

  post<T>(path: string, body: T): Observable<T> {
    return this.http.post<T>(apiUrl + path, body);
  }

  put<T>(path: string, body: T): Observable<T> {
    return this.http.put<T>(apiUrl + path, body);
  }

  patch<T>(path: string, body: T): Observable<T> {
    return this.http.patch<T>(apiUrl + path, body);
  }

  delete<T>(path: string): Observable<T> {
    return this.http.delete<T>(apiUrl + path);
  }
}
