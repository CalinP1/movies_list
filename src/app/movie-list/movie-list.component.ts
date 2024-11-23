import { Component, OnInit } from '@angular/core';
import { SearchFormComponent } from '../search-form/search-form.component';
import { MovieService } from '../services/movie.service';
import { CommonModule } from '@angular/common';
import { MediaData } from '../models/mediaData.model';
@Component({
  selector: 'app-movie-list',
  standalone: true,
  imports: [SearchFormComponent, CommonModule],
  templateUrl: './movie-list.component.html',
  styleUrl: './movie-list.component.css',
})
export class MovieListComponent implements OnInit {
  movies: MediaData[] = [];
  constructor(private movieService: MovieService) {}
  ngOnInit(): void {
    // this.movieService.getMovier({ title: '' });
    console.log();
  }
}
