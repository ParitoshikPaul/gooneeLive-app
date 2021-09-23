import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  public readonly API_ROOT_URL: string = environment.API.BaseURL + environment.API.MiddleWare;

  httpOptions = {
    headers: new HttpHeaders(
      { 
        'Content-Type': 'application/json',
     },
      )
  };

  constructor(
    private httpClient: HttpClient,
    private _router: Router,
  ) { }
   

  post(endpoint: string, body: any) {
    return this.httpClient.post(`${this.API_ROOT_URL}${endpoint}`, body, this.httpOptions).pipe(catchError(this.handleError('Error occured')));
  }

  get(endpoint: string, body: any) {
    return this.httpClient.get(`${this.API_ROOT_URL}${endpoint}`, body).pipe(catchError(this.handleError('Error occured')));
  }

  patch(endpoint: string, body: any) {
    return this.httpClient.patch(`${this.API_ROOT_URL}${endpoint}`, body, this.httpOptions).pipe(catchError(this.handleError('Error occured')));
  }

  delete(endpoint: string, body: any) {
    return this.httpClient.delete(`${this.API_ROOT_URL}${endpoint}`, body).pipe(catchError(this.handleError('Error occured')));
  }

  update(endpoint: string, body: any) {
   // return this.httpClient.update(`${this.API_ROOT_URL} + ${endpoint}`, body, this.httpOptions).pipe(catchError(this.handleError('Error occured')));
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      console.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }


}
