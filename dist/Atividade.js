export class Atividade {
    constructor(id, nome, idFuncionario, prazo, situacao) {
        this._id = id;
        this._nome = nome;
        this._idFuncionario = idFuncionario;
        this._prazo = prazo;
        this._situacao = situacao;
    }
    // --- GETTERS PÚBLICOS (A chave para sumir o vermelho dos outros arquivos) ---
    get id() {
        return this._id;
    }
    get nome() {
        return this._nome;
    }
    get idFuncionario() {
        return this._idFuncionario;
    }
    get prazo() {
        return this._prazo;
    }
    get situacao() {
        return this._situacao;
    }
}
