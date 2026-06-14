export class Atividade {
  private _id: number;
  private _nome: string;
  private _idFuncionario: number;
  private _prazo: Date;
  private _situacao: string;

  constructor(
    id: number,
    nome: string,
    idFuncionario: number,
    prazo: Date,
    situacao: string,
  ) {
    this._id = id;
    this._nome = nome;
    this._idFuncionario = idFuncionario;
    this._prazo = prazo;
    this._situacao = situacao;
  }

  // --- GETTERS PÚBLICOS (A chave para sumir o vermelho dos outros arquivos) ---

  public get id(): number {
    return this._id;
  }

  public get nome(): string {
    return this._nome;
  }

  public get idFuncionario(): number {
    return this._idFuncionario;
  }

  public get prazo(): Date {
    return this._prazo;
  }

  public get situacao(): string {
    return this._situacao;
  }
}
