import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environments';
@Injectable({
  providedIn: 'root',
})
export class MovieService {
  private apikey = environment.apiKey;
  private apiUrl = `https://api.watchmode.com/v1/genres/?apiKey=${this.apikey}`;
  constructor() {}
}
