//httpConfig.interceptor.ts
import {
    HttpRequest,
    HttpHandler,
    HttpEvent,
    HttpInterceptor,
    HttpResponse,
    HttpErrorResponse
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { LocalService } from '../services/local.service';


@Injectable()
export class HttpConfigInterceptor implements HttpInterceptor {

    constructor(
    public localService: LocalService

    ) { }


    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        this.localService.presentLoading();
        let token: any | false = (localStorage.getItem('session-token'));
        //Authentication by setting header with token value
        if (token) {
            token = JSON.parse(token);
            request = request.clone({
                setHeaders: {
                    'Authorization': "Bearer " + token.access_token
                }
            });
        }
        return next.handle(request);
        //   if (!request.headers.has('Content-Type')) {
        //     request = request.clone({
        //       setHeaders: {
        //         'content-type': 'application/json'
        //       }
        //     });
        //   }

        //   request = request.clone({
        //     headers: request.headers.set('Accept', 'application/json')
        //   });

        //   return next.handle(request).pipe(
        //     map((event: HttpEvent<any>) => {
        //       if (event instanceof HttpResponse) {
        //         console.log('event--->>>', event);
        //       }
        //       return event;
        //     }),
        //     catchError((error: HttpErrorResponse) => {
        //       console.error(error);
        //       return throwError(error);
        //     }));
    }


}