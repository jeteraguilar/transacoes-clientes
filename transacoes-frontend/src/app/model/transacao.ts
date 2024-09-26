export class Transacao {
    id!: number;
    nome!: string;
    valor!: number;
    numeroConta!: string;
    tipoTransacao!: 'CREDITO' | 'DEBITO';

    constructor(){}

}
export enum TipoTransacao {
  CREDITO = "CRÉDITO",
  DEBITO = "DÉBITO"
}
