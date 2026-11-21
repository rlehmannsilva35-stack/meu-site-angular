import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  titulo: string = 'Bem-vindo à Aplicação Angular';
  cliques: number = 0;

  incrementarCliques(): void {
    this.cliques++;
  }
}