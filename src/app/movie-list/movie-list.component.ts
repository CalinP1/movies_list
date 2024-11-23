import { Component, Input } from '@angular/core';
import { SearchFormComponent } from '../search-form/search-form.component';
import { CommonModule } from '@angular/common';
import { MediaData } from '../models/mediaData.model';
@Component({
  selector: 'app-movie-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './movie-list.component.html',
  styleUrl: './movie-list.component.css',
})
export class MovieListComponent {
  constructor() {}

  @Input() movies: any[] = [];
}
