import { Routes } from '@angular/router';
import { HotelsUserAccountComponent } from './hotels-user-account/hotels-user-account.component';
import { HotelsDisplaySearchComponent } from './hotels-display-search/hotels-display-search.component';
import { HotelsMainMenuComponent } from './hotels-main-menu/hotels-main-menu.component';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'profile', component: HotelsUserAccountComponent },
  { path: 'hotels-list', component: HotelsDisplaySearchComponent },
];
