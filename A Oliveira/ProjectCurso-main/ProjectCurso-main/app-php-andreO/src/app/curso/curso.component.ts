import { Component, OnInit } from '@angular/core';
import { Curso } from './curso';
import { CursoService } from './curso.service';

@Component({
  selector: 'app-curso',
  templateUrl: './curso.component.html',
  styleUrls: ['./curso.component.css']

})
export class CursoComponent implements OnInit {

  //URL Base
  url = "http://localhost/api/ProjectCurso/php/";

  //Vetor de Cursos
  vetor: Curso[];

  //Construtor
  constructor(private curso_service: CursoService) {}

  //Inicializador
  ngOnInit() {
    //Ao iniciar, deverá listar os cursos
    this.selecao();    
  }

  //Cadastrar
  cadastrar(): void{
    alert("Cadastrar");
  }

  //Seleção
  selecao(): void{
    this.curso_service().subscribe(
      (res: Curso[]) => {
        this.vetor = res;
      } 
    )
  }

  //Alterar
  alterar(): void{
    alert("Alterar");
  }

  //Remover
  remover(): void{
    alert("Remover");
  }
}
