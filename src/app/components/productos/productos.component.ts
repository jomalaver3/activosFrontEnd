import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ProductoService } from '../../services/producto.service';
import { CommonModule } from '@angular/common';

import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';

// 🔹 Importar módulos de Angular Material necesarios
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';



@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css'],
  imports: [MatTableModule, MatIconModule, MatButtonModule, MatDialogModule, MatFormFieldModule, MatInputModule, FormsModule, CommonModule]

})
export class ProductosComponent implements OnInit {
  displayedColumns: string[] = ['id', 'nombre', 'descripcion', 'stock', 'precio',
    'categoria', 'acciones'];
  dataSource = new MatTableDataSource<any>();
  modalVisible = false;
  editando = false;
  producto = { id: 0, nombre: '', precio: 0, stock: 0, categoria: '', descripcion: '' };

  constructor(private productoService: ProductoService) { }

  ngOnInit() {
    this.cargarProductos();
  }

  cargarProductos() {
    this.productoService.obtenerProductos().subscribe(data => {
      this.dataSource.data = data;
    });
  }

  abrirModal(producto?: any) {
    this.modalVisible = true;
    if (producto) {
      this.editando = true;
      this.producto = { ...producto };
    } else {
      this.editando = false;
      this.producto = { id: 0, nombre: '', precio: 0, stock: 0, categoria: '', descripcion: '' };
    }
  }

  cerrarModal() {
    this.modalVisible = false;
  }

  guardarProducto() {
    if (this.editando) {
      this.productoService.actualizarProducto(this.producto.id, this.producto)
        .subscribe(() => this.cargarProductos());
    } else {
      this.productoService.agregarProducto(this.producto)
        .subscribe(() => this.cargarProductos());
    }
    this.cerrarModal();
  }

  eliminarProducto(id: number) {
    if (confirm('¿Está seguro de eliminar este producto?')) {
      this.productoService.eliminarProducto(id)
        .subscribe(() => this.cargarProductos());
    }
  }
  editarProducto(producto?: any) {
    this.editando=true;
    this.abrirModal(producto);
  }
}