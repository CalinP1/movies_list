import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class MovieService {
  private apiUrl = 'https://api.watchmode.com/v1/genres/?apiKey=YOUR_API_KEY';
  constructor() {}
}
