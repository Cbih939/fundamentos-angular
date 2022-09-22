import { Component, OnInit } from '@angular/core';
import { Celular } from '../types/celular';

@Component({
  selector: 'app-renderizando-listas',
  templateUrl: './renderizando-listas.component.html',
  styleUrls: ['./renderizando-listas.component.css']
})
export class RenderizandoListasComponent  {
  celulares: Celular [] = [
  {id: 1, nome: "Celular XL", descricao: "Apenas um smartphone grande", esgotado: false},
  {id: 2, nome: "Celular L", descricao: "Apenas um smartphone medio", esgotado: false},
  {id: 3, nome: "Celular M", descricao: "Apenas um smartphone pequeno", esgotado: true},
  {id: 4, nome: "Celular XM", descricao: "Apenas um smartphone muito pequeno", esgotado: false},
  {id: 5, nome: "Celular XXM", descricao: "Apenas um smartphone para anão", esgotado: true}
  ]
}
