import { Component, OnInit } from '@angular/core';
import { ActivationStart } from '@angular/router';

@Component({
  selector: 'app-segundo-componente',
  templateUrl: './segundo-componente.component.html',
  styleUrls: ['./segundo-componente.component.css']
})
export class SegundoComponenteComponent {
  nome = "Cbimoh Athayde";
  dataNascimento = "1989-09-06";
  urlImagem = "/assets/avatar.jpg";

  mostrarDataNascimento(){
    alert(`A data de nascimento de Cbimoh é: ${this.dataNascimento}`);
  }
}
