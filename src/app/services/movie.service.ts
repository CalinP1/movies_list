import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environments';
import { catchError, map, Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class MovieService {
  private apikey = environment.apiKey;
  private apiUrl = `https://api.watchmode.com/v1/genres/?apiKey=${this.apikey}`;
  constructor(private http: HttpClient) {}

  getMovier(): Observable<any> {
    return this.http.get(this.apiUrl).pipe(
      map((data: any) => {
        return data;
      }),
      catchError((error) => {
        console.log('Eroare la obtinerea de filne', error);
        throw error;
      })
    );
  }
}
