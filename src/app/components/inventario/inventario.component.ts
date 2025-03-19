import { Component, OnInit } from '@angular/core';
import { InventarioService } from '../../services/inventario.service';
import { MatTableModule } from '@angular/material/table';
@Component({
  selector: 'app-inventario',
  templateUrl: './inventario.component.html',
  styleUrls: ['./inventario.component.css'],
  imports:[MatTableModule]
})
export class InventarioComponent implements OnInit {
  productos: any[] = [];
  displayedColumns: string[] = ['nombre', 'stock', 'acciones'];

  constructor(private inventarioService: InventarioService) {}

  ngOnInit() {
    this.cargarProductos();
  }

  cargarProductos() {
    this.inventarioService.obtenerProductos().subscribe(data => {
      this.productos = data;
    });
  }

  registrarMovimiento(productoId: number, tipo: string) {
    const cantidad = prompt(`Ingrese cantidad para ${tipo}`);
    if (cantidad) {
      this.inventarioService.registrarMovimiento({ productoId, cantidad: parseInt(cantidad), tipoMovimiento: tipo, usuarioId: 1 })
        .subscribe(() => this.cargarProductos());
    }
  }
}