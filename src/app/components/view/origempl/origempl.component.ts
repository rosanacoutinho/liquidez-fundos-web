import { Component, OnInit } from '@angular/core';
import { LimiteService } from '../../service/limite.service'



@Component({
  selector: 'app-origempl',
  templateUrl: './origempl.component.html',
  styleUrls: ['./origempl.component.css']
})
export class OrigemplComponent implements OnInit {

  constructor(private limiteService : LimiteService) { }

  codigoDrive : any = null;
  origemPlList : any[] = null; 
  idFundo: string = null;
  fundo : any = null;
  drive: any = null;
  origemPl: any = null;
  origemSelecionada : any = null;
  origemDrive = 'Drive'

  ngOnInit(): void {
  }


  consultaFundo(){

    this.limiteService.getFundoOrigemPl(this.codigoDrive).subscribe(resposta => {
      console.log(resposta)
      if (resposta.length == 0) {
        this.fundo = null
        this.drive = null 
        this.origemPl = null;
        alert('Fundo nao encontrado')
        
      } else {
        this.idFundo = resposta[0][0];
        this.fundo = resposta[0][1];
        this.drive= resposta[0][2];
        this.origemPl = resposta[0][3] == null ? 'Drive' : resposta[0][3] ;
      }
        
     } 
     )

    this.limiteService.getOrigemPl().subscribe(resposta => {
      console.log(resposta)
      this.origemPlList = resposta
    } )
  }


  salvar(){
    if(this.origemSelecionada === 'Drive'){
      this.origemSelecionada = null 
    }
    this.limiteService.postOrigemPl(this.idFundo,  this.origemSelecionada).subscribe(resposta => {
      console.log(resposta)
      if (resposta == 1){
          this.limiteService.getFundoOrigemPl(this.codigoDrive).subscribe(resposta => {
          this.origemPl = resposta[0][3] == null ? 'Drive' : resposta[0][3] ;
          } )
      } else {
        alert('Algo deu errado')
      }
     } 
     )


  }




}
