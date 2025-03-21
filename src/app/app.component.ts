import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'activosFrontEnd';

  constructor(private router: Router){}
  isLoginPage(): boolean {
    return this.router.url === '/login'; // Devuelve true si estamos en /login
  }
}
