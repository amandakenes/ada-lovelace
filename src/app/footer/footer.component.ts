import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css',
})
export class FooterComponent {
  button: string = 'btn';
  authForm(value: string, value1: string, value2: string) {
    if (value.trim() === '' && value1.trim() === '' && value2.trim() == '') {
      alert('Insira dados válidos!');
    } else {
      alert('Prontinho! Agora você receberá nossos e-mails!');
    }
  }
}
