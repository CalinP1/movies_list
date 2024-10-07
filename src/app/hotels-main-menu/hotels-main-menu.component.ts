import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-hotels-main-menu',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './hotels-main-menu.component.html',
  styleUrl: './hotels-main-menu.component.css',
})
export class HotelsMainMenuComponent {}
