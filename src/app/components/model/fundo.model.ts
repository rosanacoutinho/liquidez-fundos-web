import { Limite } from './limite.model';
export interface Fundo {
    id: Number,
    nome: String,
    codigoDrive: String,
    limites: Limite[],
}