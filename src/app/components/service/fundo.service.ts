import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { Limite } from '../model/limite.model'

@Injectable({
  providedIn: 'root'
})
export class FundoService {

  base_path = 'https://pxl1rwtbr002.dispositivos.bb.com.br:8762/cadastro-limite-webservice';

  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error('Um erro ocorrido:', error.error.message);
    } else {
      console.error(
        `Backend returnou codigo ${error.status}, ` +
        `Com o corpo: ${error.error}`);
    }
    return throwError(
      'Algo ruim aconteceu; por favor, tente novamente mais tarde.');
  };

  getFunds(id): Observable<any> {
    return this.http
      .get<any>(this.base_path + '/fundos/' + id)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }

  getOverviews(id): Observable<any> {
    return this.http
      .get<any>(this.base_path + '/sumulas/' + id)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }

  deleteOverviews(id): Observable<any> {
    return this.http
      .delete<any>(this.base_path + '/limites/' + id)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }

  getLimite(): Observable<any> {
    return this.http
      .get<any>(this.base_path + '/tipos')
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }

  salvarLimite(idFundo, tipoLimite, item): Observable<Limite> {
    return this.http
      .post<Limite>(this.base_path + '/fundos/' + idFundo + '/limites/' + tipoLimite, JSON.stringify(item), this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }

  salvarLimitePeriodo(idFundo, tipoLimite, item): Observable<Limite> {
    return this.http
      .post<Limite>(this.base_path + '/fundos/' + idFundo + '/limites/periodo/' + tipoLimite, JSON.stringify(item), this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }

  salvarLimiteIndexadores(idFundo, tipoLimite, item): Observable<Limite> {
    return this.http
      .post<Limite>(this.base_path + '/fundos/' + idFundo + '/limites/indexadores/' + tipoLimite, JSON.stringify(item), this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }

  salvarLimiteTrackingerror(idFundo, tipoLimite, item): Observable<Limite> {
    return this.http
      .post<Limite>(this.base_path + '/fundos/' + idFundo + '/limites/trackingerror/' + tipoLimite, JSON.stringify(item), this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }

  salvarLimiteDescasamento(idFundo, tipoLimite, item): Observable<Limite> {
    return this.http
      .post<Limite>(this.base_path + '/fundos/' + idFundo + '/limites/descasamento/' + tipoLimite, JSON.stringify(item), this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }



}

