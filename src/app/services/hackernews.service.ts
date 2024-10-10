import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, catchError, forkJoin, throwError } from 'rxjs';
import { Post } from '../models/post.model';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HackernewsService {
  private BASE_URL = environment.BASE_URL;

  constructor(private http: HttpClient) { }

  getNewPostIds(): Observable<number[]> {
    return this.http.get<number[]>(`${this.BASE_URL}/newstories.json`).pipe(
      catchError(this.handleError)  // Add error handling
    );
  }

  getPostById(id: number): Observable<Post> {
    return this.http.get<Post>(`${this.BASE_URL}/item/${id}.json`).pipe(
      catchError(this.handleError)  // Add error handling
    );
  }

  getPostsByIds(ids: number[]): Observable<Post[]> {
    const requests = ids.map(id => this.getPostById(id));
    return forkJoin(requests).pipe(
      catchError(this.handleError)  // Add error handling
    );
  }

  // Error handler method
  private handleError(error: HttpErrorResponse) {
    let errorMessage = '';

    if (error.error instanceof ErrorEvent) {
      // Client-side or network error occurred
      errorMessage = `An error occurred: ${error.error.message}`;
    } else {
      // Server-side error
      errorMessage = `Server returned code: ${error.status}, error message is: ${error.message}`;
    }

    // Log the error to the console or send it to a logging infrastructure
    console.error(errorMessage);
    return throwError(() => new Error('Something went wrong. Please try again later.'));
  }
}

