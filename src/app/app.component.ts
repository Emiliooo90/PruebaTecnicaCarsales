import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { SearchComponent } from './search/search.component';

/*
@Component({
  selector: 'app-navbar',
  standalone: true,
  templateUrl: './navbar/navbar.component.html',
  styleUrl: './navbar/navbar.component.css'
})
export class NavbarComponent {
  title = 'Navbar'
} */
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, SearchComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'PruebaTecnicaCarsales';
}
