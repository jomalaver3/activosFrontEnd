import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {
  private apiUrl = 'https://localhost:44358/api/Productos'; // Ajusta según tu backend

  constructor(private http: HttpClient) { }

  obtenerProductos(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}`);
  }

  obtenerProductoPorId(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }

  agregarProducto(producto: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/agregar`, producto);
  }

  actualizarProducto(id: number, producto: any): Observable<any> {
/*     return this.http.put(`${this.apiUrl}/actualizar/${id}`, producto);
 */    return this.http.put(`${this.apiUrl}/actualizar`, producto);

  }

  eliminarProducto(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}