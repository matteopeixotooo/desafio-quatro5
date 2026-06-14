export class Funcionario {
  private _id: number;
  private _nome: string;

  constructor(id: number, nome: string) {
    this._id = id;
    this._nome = nome;
  }

  // Getters públicos para o app.ts conseguir ler os dados
  public get id(): number {
    return this._id;
  }

  public get nome(): string {
    return this._nome;
  }
}
