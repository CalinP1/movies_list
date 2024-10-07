import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { NavbarComponent } from '../navbar/navbar.component';
@Component({
  selector: 'app-hotels-main-menu',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, NavbarComponent, RouterOutlet],
  templateUrl: './hotels-main-menu.component.html',
  styleUrl: './hotels-main-menu.component.css',
})
export class HotelsMainMenuComponent {}
