import { Component } from '@angular/core';
import { SearchFormComponent } from '../search-form/search-form.component';
@Component({
  selector: 'app-movie-list',
  standalone: true,
  imports: [SearchFormComponent],
  templateUrl: './movie-list.component.html',
  styleUrl: './movie-list.component.css',
})
export class MovieListComponent {}
