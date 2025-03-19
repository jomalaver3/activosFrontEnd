import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  standalone: true,
  imports: [MatCardModule, 
    MatInputModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
   ]
})

export class LoginComponent {
  username = '';
  password = '';
  loginForm: FormGroup;

  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) {
    this.loginForm = this.fb.group({
      username: ['', [Validators.required, Validators.email]], // Campo obligatorio y formato de email
      password: ['', [Validators.required, Validators.minLength(6)]] // Mínimo 6 caracteres
    });

  }



  login() {
    if (this.loginForm.invalid) {
      return;
    }
    console.log(this.username);
    console.log(this.loginForm.get('username')?.value);
    this.authService.login({ username: this.loginForm.get('username')?.value, password: this.loginForm.get('password')?.value}).subscribe(
      () => this.router.navigate(['/dashboard']),err => alert(err.error)
    );
  }
  get f() {
    return this.loginForm.controls; // Para acceder a los errores en la vista
  }

}