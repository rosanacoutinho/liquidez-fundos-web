import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Registro } from '../model/registro.model';
import { Sumula } from '../model/sumula.model'
import { limiteIndexador } from '../model/limiteIndexador.model'
import { TrackingErrorRetorno } from '../model/trackingErrorRetorno.model'
import { environment } from '../../../environments/environment';
import {Indexador} from '../model/indexador.model';



@Injectable({
  providedIn: 'root'
})
export class LimiteService {


  //ng build --base-href=/cadastrolimite/
  //ng serve  --proxy-config proxy.config.js

  constructor(private http: HttpClient) { }

  contexto = environment.urlCadastroLimiteWebservice


  salvarLimite(registro : Registro) {
    var paramURL = 'limite'
    var url = this.contexto + paramURL 
    var bodyParam = registro
      return this.http.post(url, bodyParam);
   }

  postFile(fileToUpload: File): Observable<any> {
    const formData: FormData = new FormData();
    var paramURL = 'arquivo'
    var url = this.contexto + paramURL
    formData.append('file', fileToUpload, fileToUpload.name);    
    return this.http.post(url, formData);
}

 postSumula(sumula : Sumula) {
  var paramURL = 'sumula'
    var url = this.contexto + paramURL 
    var bodyParam = sumula
      return this.http.post(url, bodyParam);
 }

 postLimiteIndexador(limiteIndexador : limiteIndexador) {
  var paramURL = 'limiteIndexador'
    var url = this.contexto + paramURL 
    var bodyParam = limiteIndexador
      return this.http.post(url, bodyParam);
 }


 postTrackingErrorRetorno(trackingErrorRetorno : TrackingErrorRetorno) {
  var paramURL = 'trackingErrorRetorno'
    var url = this.contexto + paramURL 
    var bodyParam = trackingErrorRetorno
      return this.http.post(url, bodyParam);
 }

  consultarLimites(codigoDrive: string): Observable<any[]> {
    var paramURL = `limites/${codigoDrive}`
    var url = this.contexto + paramURL
    return this.http.get<any[]>(url)
  }

  consultarFundo(codigoDrive: string): Observable<any[]> {
    var paramURL = `fundos/${codigoDrive}`
    var url = this.contexto + paramURL
    return this.http.get<any[]>(url)
  }

  getIndexadores() : Observable<Indexador[]> {
    var paramURL = 'indexadores'
    var url = this.contexto + paramURL
    return this.http.get<Indexador[]>(url)
  }

  getClassificacoes() : Observable<any[]> {
    var paramURL = 'classificacoes'
    var url = this.contexto + paramURL
    return this.http.get<any[]>(url)
  }

  getTipos() : Observable<any[]> {
    var paramURL = 'tipos'
    var url = this.contexto + paramURL
    return this.http.get<any[]>(url)
  }

  getCenarios() : Observable<any[]> {
    var paramURL = 'cenarios'
    var url = this.contexto + paramURL
    return this.http.get<any[]>(url)
  }

  getEventos() : Observable<any[]> {
    var paramURL = 'eventos'
    var url = this.contexto + paramURL
    return this.http.get<any[]>(url)
  }

  getPercentuaisConfianca() : Observable<any[]> {
    var paramURL = 'percentuaisConfianca'
    var url = this.contexto + paramURL
    return this.http.get<any[]>(url)
  }

  getSumulas(codigoDrive: string, tipo: string) : Observable<any[]> {
    var paramURL = `sumula/${codigoDrive}/${tipo}`
    var url = this.contexto + paramURL
    return this.http.get<any[]>(url)
  }

  getIndexador() : Observable<any[]> {
    var paramURL = 'indexadores'
    var url = this.contexto + paramURL
    return this.http.get<any[]>(url)
  }


  getTrackingErrorRetorno(codigoDrive: string, tipo: string) : Observable<any[]> {
    var paramURL = `trackingErrorRetorno/${codigoDrive}/${tipo}`
    var url = this.contexto + paramURL
    return this.http.get<any[]>(url)
  }


  getFundoOrigemPl(codigoDrive: string){
    var paramURL = `fundo/${codigoDrive}`
    var url = this.contexto + paramURL
    return this.http.get<any[]>(url)
  }

  getOrigemPl(){
    var paramURL = `origemPl`
    var url = this.contexto + paramURL
    return this.http.get<any[]>(url)
  }

  postOrigemPl(idFundo: string, origemPl: string){
    var paramURL = `origemPl`
    var url = this.contexto + paramURL
    var bodyParam = {
      "idFundo" : idFundo,
      "origemPl" : origemPl
    }
      return this.http.post(url, bodyParam);
  }




}
