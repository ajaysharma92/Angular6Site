import { Injectable } from '@angular/core';
import { Observable, of, observable } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { User } from './user';
import { HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  apiurl = 'api/users';
  constructor(private http : HttpClient) { }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
  
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
  
      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);
  
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  signup(formData: NgForm){
    return this.http.post<any>(`${this.apiurl}/signup`, formData)
    .pipe(tap(user => {
        //localStorage.setItem('currentUser', JSON.stringify(user));
        console.log(`added user w/ id=${user.id}`);
      }),
      catchError(this.handleError('signup', []))
    );
  }

  login(formData: NgForm){
    return this.http.post<any>(`${this.apiurl}/login`, formData)
    .pipe(tap(user => {
        if(user !== ''){
          localStorage.setItem('currentUser', JSON.stringify(user));
          console.log(`Login with user w/ id=${user.id}`);        
        }
      }),
      catchError(this.handleError('Login', []))
    )
  }

  // Need to start watching from video time url : https://youtu.be/UT2BN-wJD_8?list=PLY7EDLM5qnl47r52Rf3h4AEq9TRooTgo2
  // time frame need to start from : 1:36:35

}
