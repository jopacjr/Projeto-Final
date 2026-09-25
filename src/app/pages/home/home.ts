import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

export interface Veiculo {
  nome: string;
  imagem: string;
}

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

  // Lista dos veículos associados às imagens da pasta public/img
  veiculos: Veiculo[] = [
    { nome: 'Ranger', imagem: 'img/Ford_Ranger.png' },
    { nome: 'Mustang', imagem: 'img/Ford_mustang.png' },
    { nome: 'Territory', imagem: 'img/Ford_territory.png' },
    { nome: 'Maverick', imagem: 'img/ford_maverick.png' },
    { nome: 'F-150', imagem: 'img/Ford_F150.png' }
  ];

  currentIndex = 0;

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

  // Atualiza o carrossel ao selecionar no formulário
  onModeloChange(novoModelo: string): void {
    const index = this.veiculos.findIndex(v => v.nome === novoModelo);
    if (index !== -1) {
      this.currentIndex = index;
    }
  }

  // Métodos de navegação manual do carrossel
  prevSlide(): void {
    this.currentIndex = (this.currentIndex === 0) ? this.veiculos.length - 1 : this.currentIndex - 1;
    this.sincronizarFormulario();
  }

  nextSlide(): void {
    this.currentIndex = (this.currentIndex === this.veiculos.length - 1) ? 0 : this.currentIndex + 1;
    this.sincronizarFormulario();
  }

  irParaSlide(index: number): void {
    this.currentIndex = index;
    this.sincronizarFormulario();
  }

  private sincronizarFormulario(): void {
    this.agendamento.modelo = this.veiculos[this.currentIndex].nome;
  }

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