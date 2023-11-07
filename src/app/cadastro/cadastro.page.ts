import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-Cadastro',
  templateUrl: './Cadastro.page.html',
  styleUrls: ['./Cadastro.page.scss'],
})
export class CadastroPage {
  fullName?: string;
  cpf?: string;
  dateOfBirth?: string;
  email?: string;
  username?: string;
  password?: string;
  confirmPassword?: string;
  validationMessage?: string;

  constructor(private router: Router, private http: HttpClient) { }

  cadastrarUsuario() {
    if (this.validarCampos()) {
      // Aqui você pode adicionar a lógica para cadastrar o usuário no backend
      const userData = {
        fullName: this.fullName,
        cpf: this.cpf,
        dateOfBirth: this.dateOfBirth,
        email: this.email,
        username: this.username,
        password: this.password
      };

      this.http.post('localhost:3000', userData).subscribe(
        (response) => {
          this.router.navigate(['/dashboard']);
          alert('Usuário cadastrado com sucesso!');
        },
        (error) => {
          console.error('Erro ao cadastrar usuário:', error);
        }
      );
    }
  }

  validarCampos(): boolean {
    if (!this.fullName || !this.cpf || !this.dateOfBirth || !this.email || !this.username || !this.password || !this.confirmPassword) {
      this.validationMessage = 'Por favor, preencha todos os campos.';
      return false;
    }

    if (this.password !== this.confirmPassword) {
      this.validationMessage = 'As senhas não coincidem.';
      return false;
    }

    // Outras validações necessárias...

    return true;
  }
}