import { Routes } from '@angular/router';
import { MovieListComponent } from './movie-list/movie-list.component';
import { ProfileComponent } from './profile/profile.component';
import { TvShowsListComponent } from './tv-shows-list/tv-shows-list.component';
import { HeroPageComponent } from './hero-page/hero-page.component';

export const routes: Routes = [
  { path: '', component: HeroPageComponent },
  { path: '', redirectTo: '', pathMatch: 'full' },
  { path: 'movieList', component: MovieListComponent },
  { path: 'tvShowsList', component: TvShowsListComponent },
  { path: 'profile', component: ProfileComponent },
];
