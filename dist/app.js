import { GerenciadorOperacao } from "./GerenciadorOperacao.js";
import { Atividade } from "./Atividade.js";
import { Funcionario } from "./Funcionario.js";
const inputBusca = document.getElementById("busca-responsavel");
const selectFiltro = document.getElementById("filtro-situacao");
const operacao = new GerenciadorOperacao();
operacao.adicionarFuncionario(new Funcionario(1, "Lucas"));
operacao.adicionarFuncionario(new Funcionario(2, "Beatriz"));
operacao.adicionarFuncionario(new Funcionario(3, "Mateus"));
operacao.adicionarFuncionario(new Funcionario(4, "Mariana"));
operacao.adicionarFuncionario(new Funcionario(5, "Thiago"));
operacao.adicionarFuncionario(new Funcionario(6, "Amanda"));
operacao.adicionarFuncionario(new Funcionario(7, "Bruno"));
operacao.adicionarFuncionario(new Funcionario(8, "Camila"));
operacao.adicionarFuncionario(new Funcionario(9, "Diego"));
operacao.adicionarFuncionario(new Funcionario(10, "Fernanda"));
const amanha = new Date();
amanha.setDate(amanha.getDate() + 1);
const ontem = new Date();
ontem.setDate(ontem.getDate() - 1);
const semanaQueVem = new Date();
semanaQueVem.setDate(semanaQueVem.getDate() + 7);
operacao.adicionarAtividade(new Atividade(101, "Ajustar Planilha de Custos", 1, amanha, "Em Andamento"));
operacao.adicionarAtividade(new Atividade(102, "Revisar Código do Sistema", 1, semanaQueVem, "Em Andamento"));
operacao.adicionarAtividade(new Atividade(103, "Configurar Servidor de Testes", 1, amanha, "Em Andamento"));
operacao.adicionarAtividade(new Atividade(104, "Enviar Proposta para Cliente VIP", 2, ontem, "A Fazer"));
operacao.adicionarAtividade(new Atividade(105, "Atualizar Cadastro do Fornecedor", 7, ontem, "Em Andamento"));
operacao.adicionarAtividade(new Atividade(106, "Desenvolver UI do Dashboard", 3, amanha, "Em Andamento"));
operacao.adicionarAtividade(new Atividade(107, "Homologar Banco de Dados", 4, semanaQueVem, "Em Andamento"));
operacao.adicionarAtividade(new Atividade(108, "Criar Artes para Redes Sociais", 6, amanha, "Em Andamento"));
operacao.adicionarAtividade(new Atividade(109, "Planejar Reunião de SPRINT", 8, semanaQueVem, "A Fazer"));
operacao.adicionarAtividade(new Atividade(110, "Disparar E-mail Marketing", 9, amanha, "A Fazer"));
operacao.adicionarAtividade(new Atividade(111, "Auditoria dos Contratos Antigos", 10, ontem, "Concluido"));
function renderizarTabelaFiltrada() {
    const corpoTabela = document.getElementById("corpo-tabela-atividades");
    if (!corpoTabela)
        return;
    corpoTabela.innerHTML = "";
    const termoBusca = inputBusca.value.toLowerCase().trim();
    const situacaoSelecionada = selectFiltro.value;
    const atividadesFiltradas = operacao.atividades.filter((atividade) => {
        const funcionarioObj = operacao.funcionarios.find((f) => f.id === atividade.idFuncionario);
        const nomeFuncionario = funcionarioObj
            ? funcionarioObj.nome.toLowerCase()
            : "não alocado";
        const bateResponsavel = nomeFuncionario.includes(termoBusca);
        let statusReal = atividade.situacao;
        const hoje = new Date();
        if (atividade.situacao !== "Concluido" && atividade.prazo < hoje) {
            statusReal = "Atrasada";
        }
        const bateSituacao = situacaoSelecionada === "Todos" || statusReal === situacaoSelecionada;
        return bateResponsavel && bateSituacao;
    });
    atividadesFiltradas.forEach((atividade) => {
        const funcionarioObj = operacao.funcionarios.find((f) => f.id === atividade.idFuncionario);
        const nomeFuncionario = funcionarioObj
            ? funcionarioObj.nome
            : "Não alocado";
        const tr = document.createElement("tr");
        let statusReal = atividade.situacao;
        let classeBadge = "badge-a-fazer";
        const hoje = new Date();
        if (atividade.situacao !== "Concluido" && atividade.prazo < hoje) {
            statusReal = "Atrasada";
            classeBadge = "badge-atrasada";
        }
        else if (atividade.situacao === "Em Andamento") {
            classeBadge = "badge-em-andamento";
        }
        else if (atividade.situacao === "Concluido") {
            classeBadge = "badge-concluido";
        }
        tr.innerHTML = `
      <td><strong>${atividade.nome}</strong></td>
      <td>${nomeFuncionario}</td>
      <td>${atividade.prazo.toLocaleDateString("pt-BR")}</td>
      <td><span class="badge ${classeBadge}">${statusReal}</span></td>
    `;
        corpoTabela.appendChild(tr);
    });
}
if (inputBusca && selectFiltro) {
    inputBusca.addEventListener("input", renderizarTabelaFiltrada);
    selectFiltro.addEventListener("change", renderizarTabelaFiltrada);
}
window.addEventListener("DOMContentLoaded", () => {
    operacao.atualizarTela();
    renderizarTabelaFiltrada();
});
