export class Funcionario {
    constructor(id, nome) {
        this._id = id;
        this._nome = nome;
    }
    // Getters públicos para o app.ts conseguir ler os dados
    get id() {
        return this._id;
    }
    get nome() {
        return this._nome;
    }
}
