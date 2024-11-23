import { Routes } from '@angular/router';
import { SearchFormComponent } from './search-form/search-form.component';
import { ProfileComponent } from './profile/profile.component';
import { TvShowsListComponent } from './tv-shows-list/tv-shows-list.component';
import { HeroPageComponent } from './hero-page/hero-page.component';

export const routes: Routes = [
  { path: '', component: HeroPageComponent },
  { path: '', redirectTo: '', pathMatch: 'full' },
  { path: 'movieList', component: SearchFormComponent },
  { path: 'tvShowsList', component: TvShowsListComponent },
  { path: 'profile', component: ProfileComponent },
];
