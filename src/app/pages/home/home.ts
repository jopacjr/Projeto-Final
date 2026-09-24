import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {
  private router = inject(Router);

  agendadoSucesso = false;

  agendamento = {
    nome: '',
    telefone: '',
    concessionaria: '',
    modelo: '',
    tipoServico: '',
    data: '',
    horario: '',
    consentimento: false
  };

  logout(): void {
    localStorage.clear();
    this.router.navigate(['/']);
  }

  agendarServico(): void {
    if (this.agendamento.consentimento) {
      this.agendadoSucesso = true;
      console.log('Dados do agendamento enviados:', this.agendamento);
    }
  }
}