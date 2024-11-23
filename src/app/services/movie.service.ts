import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environments';
import { catchError, throwError, map, Observable } from 'rxjs';
import { MediaData } from '../models/mediaData.model';
@Injectable({
  providedIn: 'root',
})
export class MovieService {
  private apikey = environment.apiKey;
  private baseUrl = `https://api.watchmode.com/v1`;

  constructor(private http: HttpClient) {}

  private buildUrl(searchData: MediaData): string {
    return `${this.baseUrl}/autocomplete-search/?apiKey=${this.apikey}&search_value=${searchData.title}`;
  }

  findMovie(searchData: MediaData): Observable<MediaData[]> {
    const apiUrl = this.buildUrl(searchData);
    return this.getMovier(apiUrl);
  }

  private getMovier(apiUrl: string): Observable<MediaData[]> {
    console.log(apiUrl);
    return this.http.get<MediaData[]>(apiUrl).pipe(
      map((data: any) => {
        return data.results;
      }),
      catchError((error) => {
        console.error('Eroare la obținerea filmelor:', error);
        return throwError(() => new Error('Eroare la API'));
      })
    );
  }
}
