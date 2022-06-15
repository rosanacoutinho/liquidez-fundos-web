import {Sumula} from "./sumula.model" 
import {Faixa} from "./faixa.model"
export interface Limite {
    acrescimo: String
    faixas: Faixa[]
    id: Number
    idFundo: Number
    idIndexador: Number
    percentual: Number
    periodo: String
    situacao: String
    sumula:Sumula
    tipo: String
  }