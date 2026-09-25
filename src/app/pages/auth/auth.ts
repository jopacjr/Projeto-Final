import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './auth.html',
  styleUrl: './auth.css'
})
export class AuthComponent {
  private router = inject(Router);

  isLogin = true;
  errorMessage = '';

  authData = {
    nome: '',
    email: '',
    senha: '',
    confirmarSenha: ''
  };

  toggleMode(): void {
    this.isLogin = !this.isLogin;
    this.errorMessage = '';
  }

  onSubmit(): void {
    if (!this.isLogin) {
      if (this.authData.senha !== this.authData.confirmarSenha) {
        this.errorMessage = 'As senhas devem ser idênticas!';
        return;
      }
      // Simulação de cadastro com sucesso
      alert('Cadastro realizado com sucesso! Faça seu login.');
      this.isLogin = true;
      return;
    }

    // Lógica de Login
    if (this.authData.email && this.authData.senha) {
      // Salva o estado de autenticação para o Guard liberar a rota
      localStorage.setItem('isLoggedIn', 'true');
      localStorage.setItem('userEmail', this.authData.email);
      
      // Redireciona para a Home protegida
      this.router.navigate(['/home']);
    } else {
      this.errorMessage = 'Preencha todos os campos corretamente.';
    }
  }
}