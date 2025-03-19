
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent {

  constructor(private router: Router) { }

  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }
  productos() {
    this.router.navigate(['/productos']);
  }
  movimientos() {
    this.router.navigate(['/inventario']);
  }
  inicio() {
    this.router.navigate(['/dashboard']);
  }

}