import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { HeaderComponent } from '../header/header.component';
import { RouterOutlet } from '@angular/router';
@Component({
  selector: 'app-app-layout',
  standalone: true,
  imports: [NavbarComponent, HeaderComponent, RouterOutlet],
  templateUrl: './app-layout.component.html',
  styleUrl: './app-layout.component.css',
})
export class AppLayoutComponent {}
