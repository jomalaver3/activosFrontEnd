import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { AuthGuard } from './guards/auth.guard';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { InventarioComponent } from './components/inventario/inventario.component';
import { ProductosComponent } from './components/productos/productos.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' }, // Redirige siempre al login
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },

  
  { path: 'inventario', component: InventarioComponent, canActivate: [AuthGuard] },
  { path: 'productos', component: ProductosComponent, canActivate: [AuthGuard] },


  { path: '**', redirectTo: '/login' } // Si la ruta no existe, redirige al login
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
