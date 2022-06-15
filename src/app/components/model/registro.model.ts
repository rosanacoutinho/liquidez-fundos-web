import { Faixa } from './faixa.model'

export class Registro 
{
  idFundo : string
  idEvento : string
  idCenario : string
  tipo : string
  classificacao: string
  percentualConfianca: string
  dataInicio : string
  dataFim : string
  sumula : string
  dataEncerramento : string
  idIndexador : string
  valorLimite: string
  limiteInferior : string
  limiteSuperior: string
  periodo: string
  acrescimo : string
  percentual : string
  faixas : Faixa[]
  drive : string
  tipoCadastro : string
}