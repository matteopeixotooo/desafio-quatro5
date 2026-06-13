export class Atividade {
    constructor(id, titulo, responsavelId, prazo, situacaoInicial = "A Fazer") {
        this.id = id;
        this.titulo = titulo;
        this.responsavelId = responsavelId;
        this.situacao = situacaoInicial;
        this.prazo = prazo;
    }
    verificarAtraso() {
        const hoje = new Date();
        return this.situacao !== "Concluido" && this.prazo < hoje;
    }
}
