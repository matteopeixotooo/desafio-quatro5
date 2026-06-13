export class GerenciadorOperacao {
    constructor() {
        this.listaAtividades = [];
        this.listaEquipe = [];
    }
    adicionarFuncionario(funcionario) {
        this.listaEquipe.push(funcionario);
    }
    adicionarAtividade(atividade) {
        this.listaAtividades.push(atividade);
    }
    obterFuncionarioPorId(id) {
        return this.listaEquipe.find((f) => f.id === id);
    }
    calcularTotalAtrasadas() {
        return this.listaAtividades.filter((a) => a.verificarAtraso()).length;
    }
    calcularCargaTrabalho() {
        const distribuicao = {};
        this.listaEquipe.forEach((funcionario) => {
            const tarefasAtivas = this.listaAtividades.filter((a) => a.responsavelId === funcionario.id && a.situacao === "Em Andamento").length;
            distribuicao[funcionario.nome] = tarefasAtivas;
        });
        return distribuicao;
    }
    // Vai alimentar o HTML com os dados atuais das classes
    atualizarTela() {
        const elementoAtrasadas = document.getElementById("quantidade-atrasadas");
        const totalAtrasadas = this.calcularTotalAtrasadas();
        if (elementoAtrasadas) {
            elementoAtrasadas.innerText = totalAtrasadas.toString();
            elementoAtrasadas.className =
                totalAtrasadas > 0 ? "numero-kpi alerta-vermelho" : "numero-kpi";
        }
        const elementoCarga = document.getElementById("lista-carga-trabalho");
        if (elementoCarga) {
            elementoCarga.innerHTML = "";
            const dadosCarga = this.calcularCargaTrabalho();
            for (const [nome, total] of Object.entries(dadosCarga)) {
                elementoCarga.innerHTML += `
                    <div class="linha-funcionario">
                        <span>${nome}</span>
                        <span><strong>${total}</strong> em andamento</span>
                    </div>
                `;
            }
        }
        const elementoTabela = document.getElementById("corpo-tabela-atividades");
        if (elementoTabela) {
            elementoTabela.innerHTML = "";
            this.listaAtividades.forEach((atividade) => {
                const funcionario = this.obterFuncionarioPorId(atividade.responsavelId);
                const nomeFuncionario = funcionario ? funcionario.nome : "Sem Alocação";
                const dataFormatada = atividade.prazo.toLocaleDateString("pt-BR");
                let textoSituacao = "A Fazer";
                let classeCracha = "situacao-fazer";
                if (atividade.verificarAtraso()) {
                    textoSituacao = "⚠️ Atrasada";
                    classeCracha = "situacao-atrasado";
                }
                else if (atividade.situacao === "Em Andamento") {
                    textoSituacao = "Em Andamento";
                    classeCracha = "situacao-andamento";
                }
                else if (atividade.situacao === "Concluido") {
                    textoSituacao = "Concluído";
                    classeCracha = "situacao-concluido";
                }
                elementoTabela.innerHTML += `
                    <tr>
                        <td><strong>${atividade.titulo}</strong></td>
                        <td>${nomeFuncionario}</td>
                        <td>${dataFormatada}</td>
                        <td><span class="cracha ${classeCracha}">${textoSituacao}</span></td>
                    </tr>
                `;
            });
        }
    }
}
