import { Routes } from '@angular/router';
import { MovieListComponent } from './movie-list/movie-list.component';
import { ProfileComponent } from './profile/profile.component';
import { TvShowsListComponent } from './tv-shows-list/tv-shows-list.component';
export const routes: Routes = [
  { path: '', redirectTo: '/', pathMatch: 'full' },
  { path: 'movieList', component: MovieListComponent },
  { path: 'tvShowsList', component: TvShowsListComponent },
  { path: 'profile', component: ProfileComponent },
];
