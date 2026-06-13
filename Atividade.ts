export type SituacaoAtividade = "A Fazer" | "Em Andamento" | "Concluido";

export class Atividade {
  public id: number;
  public titulo: string;
  public responsavelId: number;
  public situacao: SituacaoAtividade;
  public prazo: Date;

  constructor(
    id: number,
    titulo: string,
    responsavelId: number,
    prazo: Date,
    situacaoInicial: SituacaoAtividade = "A Fazer",
  ) {
    this.id = id;
    this.titulo = titulo;
    this.responsavelId = responsavelId;
    this.situacao = situacaoInicial;
    this.prazo = prazo;
  }

  verificarAtraso(): boolean {
    const hoje = new Date();
    return this.situacao !== "Concluido" && this.prazo < hoje;
  }
}
