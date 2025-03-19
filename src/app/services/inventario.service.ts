import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InventarioService {
  private apiUrl = 'https://localhost:44358/api/Movimiento';

  constructor(private http: HttpClient) {}

  obtenerProductos(): Observable<any> {
    return this.http.get(`${this.apiUrl}/productos`);
  }

  registrarMovimiento(movimiento: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/movimiento`, movimiento);
  }
}