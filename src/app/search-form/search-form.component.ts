import { Component, inject } from '@angular/core';
import { ReactiveFormsModule, Validators, FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-search-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './search-form.component.html',
  styleUrl: './search-form.component.css',
})
export class SearchFormComponent {
  private formBuilder = inject(FormBuilder);

  searchForm = this.formBuilder.group({
    title: ['', Validators.required],
    genre: ['', Validators.required],
    minRating: ['', Validators.required],
  });

  onSubmit() {
    console.warn(this.searchForm.value);
  }
}
