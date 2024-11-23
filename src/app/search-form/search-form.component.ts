import { Component, inject } from '@angular/core';
import { ReactiveFormsModule, Validators, FormBuilder } from '@angular/forms';
import { MovieService } from '../services/movie.service';
import { MediaData } from '../models/mediaData.model';
@Component({
  selector: 'app-search-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './search-form.component.html',
  styleUrl: './search-form.component.css',
})
export class SearchFormComponent {
  searchForm: any;
  movies: MediaData[] = [];
  constructor(
    private formBuilder: FormBuilder,
    private movieService: MovieService
  ) {}

  ngOnInit() {
    this.searchForm = this.formBuilder.group({
      title: ['', Validators.required],
    });
  }

  onSubmit() {
    const formData = this.searchForm.value;
    const validData: MediaData = {
      title: formData.title || '',
    };
    this.movieService.findMovie(validData).subscribe({
      next: (movies) => {
        console.log('Rezultatele filtrate:', movies);
      },
      error: (err) => {
        console.error('Eroare la obținerea datelor:', err);
      },
    });
  }
}
