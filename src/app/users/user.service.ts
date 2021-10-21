import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpEvent, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router'
import { URL_BACKEND } from '../config/config';
import { Observable, of, throwError } from 'rxjs';
import { User } from './user';
import { map, catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private urlEndPoint: string = URL_BACKEND + '/api/users';

  constructor(private http: HttpClient, private router: Router) { }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.urlEndPoint);
  }

  create(user: User) : Observable<User>{
    let username='admin'
    let password='12345'
  
    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(username + ':' + password) });

    return this.http.post(this.urlEndPoint, user, {headers}).pipe(
      map((response: any) => response.user as User),
      catchError(e => {
        if(e.status==400){
          return throwError(e);
        }
        if(e.error.mensaje){
          console.error(e.error.mensaje);
        }
        return throwError(e);
      })
    );
  }
}
