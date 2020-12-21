import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {

  nomePortal: string;

  cursos: string[]  = ['Java', '.NET', 'NodeJS']

  constructor() {
    this.nomePortal = 'luisguts.com.br';
   }

  ngOnInit(): void {
  }

}
