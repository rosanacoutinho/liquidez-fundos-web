import { Component, OnInit } from '@angular/core';
import { LimiteService } from '../../service/limite.service'; 
import { Sumula } from '../../model/sumula.model'
import { limiteIndexador } from '../../model/limiteIndexador.model'
import { TrackingErrorRetorno } from '../../model/trackingErrorRetorno.model'


@Component({
  selector: 'app-sumula',
  templateUrl: './sumula.component.html',
  styleUrls: ['./sumula.component.css']
})
export class SumulaComponent implements OnInit {

  constructor(private limiteService : LimiteService) { }

  tipos: any[] = null;
  tipo: any = null;
  codigoDrive : any = null;

  sumulas: any[] = null; //dados tabela Sumula
  trackingErrorRetornos: any[] = null; //dados tabela Tracking Error Retorno
  limiteIndexadores: any[] = null; //dados tabela Limite Indexador

  indexadores : any[] = null; //lista de todos os indexadores disponiveis na base
  
  indexadorLimite: any = null; //indexador "pre selecionado"
  indexadorTE: any =  null; //indexador "pre selecionado"

  idIndexador: any =null;
  idIndexadorTE : any =null;




  ngOnInit(): void {
   this.getTipos();
   this.getIndexadores();
   
  }

  getTipos(){
    this.limiteService.getTipos().subscribe(resposta => {
      this.tipos = resposta
      }, error => {  
        console.log(error);
      });
  }

  consultar(){  
    this.consultarSumula()
  
    
    
  }

  consultarSumula(){
    this.sumulas = null;
    this.limiteService.getSumulas(this.codigoDrive, this.tipo).subscribe(resposta => {    
      if (resposta.length > 1) {
        alert('limite com mais de uma sumula ativa. Contate a equipe de desenvolvimento')
      } else if (resposta.length == 1 ) {
        this.sumulas = resposta
        console.log (this.sumulas[0])
      }  else {
        alert('Dado nao encontrado')
      }
      }, error => {  
        console.log(error);
        alert(error.message)
      });
  }


  

  

 

 

  getIndexadores(){
    this.limiteService.getIndexadores().subscribe(resposta => {
      this.indexadores = resposta
      }, error => {  
        console.log(error);
      });
  }



  setarseletoresComValor(){
    this.idIndexadorTE = this.trackingErrorRetornos == null ? null: this.trackingErrorRetornos[0][1]
    this.idIndexador = this.limiteIndexadores == null ? null: this.limiteIndexadores[0][1] 

    this.indexadorTE = this.getElementById(this.idIndexadorTE)
    this.indexadorLimite=  this.getElementById(this.idIndexador)
  }



  getElementById( id : any):any{
    var indexador = null
    if ( id != null ) {
      for(var i=0; i< this.indexadores.length; i++) {
        if(this.indexadores[i][0] === id) {
          indexador = this.indexadores[i]
        }
      }
    }
    return indexador
  }



}
