import { Component, OnInit } from '@angular/core';
import { SearchFormComponent } from '../search-form/search-form.component';
import { MovieService } from '../services/movie.service';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-movie-list',
  standalone: true,
  imports: [SearchFormComponent, CommonModule],
  templateUrl: './movie-list.component.html',
  styleUrl: './movie-list.component.css',
})
export class MovieListComponent implements OnInit {
  movies: any[] = [];
  constructor(private movieService: MovieService) {}
  ngOnInit(): void {
    this.movieService.getMovier().subscribe({
      // trimite cererea la API
      next: (data: any) => {
        // primeste datele de la API
        console.log(data);
        this.movies = data;
      },
      error: (err) => {
        // Error handler
        console.error('Eroare la obtinerea rezultatelor', err);
      },
      complete: () => {
        console.log('Apelul API s-a incheiat');
      },
    });
  }
}
