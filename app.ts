import { GerenciadorOperacao } from "./GerenciadorOperacao.js";
import { Atividade } from "./Atividade.js";
import { Funcionario } from "./Funcionario.js";

const inputBusca = document.getElementById(
  "busca-responsavel",
) as HTMLInputElement;
const selectFiltro = document.getElementById(
  "filtro-situacao",
) as HTMLSelectElement;

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

// Criar prazos baseados no dia de hoje para testar os alertas
const amanha = new Date();
amanha.setDate(amanha.getDate() + 1);
const ontem = new Date();
ontem.setDate(ontem.getDate() - 1);
const semanaQueVem = new Date();
semanaQueVem.setDate(semanaQueVem.getDate() + 7);

// Criando cenário hipotético
operacao.adicionarAtividade(
  new Atividade(101, "Ajustar Planilha de Custos", 1, amanha, "Em Andamento"),
);
operacao.adicionarAtividade(
  new Atividade(
    102,
    "Revisar Código do Sistema",
    1,
    semanaQueVem,
    "Em Andamento",
  ),
);
operacao.adicionarAtividade(
  new Atividade(
    103,
    "Configurar Servidor de Testes",
    1,
    amanha,
    "Em Andamento",
  ),
);
operacao.adicionarAtividade(
  new Atividade(104, "Enviar Proposta para Cliente VIP", 2, ontem, "A Fazer"),
);
operacao.adicionarAtividade(
  new Atividade(
    105,
    "Atualizar Cadastro do Fornecedor",
    7,
    ontem,
    "Em Andamento",
  ),
);
operacao.adicionarAtividade(
  new Atividade(106, "Desenvolver UI do Dashboard", 3, amanha, "Em Andamento"),
);
operacao.adicionarAtividade(
  new Atividade(
    107,
    "Homologar Banco de Dados",
    4,
    semanaQueVem,
    "Em Andamento",
  ),
);
operacao.adicionarAtividade(
  new Atividade(
    108,
    "Criar Artes para Redes Sociais",
    6,
    amanha,
    "Em Andamento",
  ),
);
operacao.adicionarAtividade(
  new Atividade(109, "Planejar Reunião de SPRINT", 8, semanaQueVem, "A Fazer"),
);
operacao.adicionarAtividade(
  new Atividade(110, "Disparar E-mail Marketing", 9, amanha, "A Fazer"),
);
operacao.adicionarAtividade(
  new Atividade(111, "Auditoria dos Contratos Antigos", 10, ontem, "Concluido"),
);

// --- FUNÇÃO DE RENDEREZAÇÃO DA TABELA COM FILTROS COMBINADOS ---
function renderizarTabelaFiltrada(): void {
  const corpoTabela = document.getElementById("corpo-tabela-atividades");
  if (!corpoTabela) return;

  corpoTabela.innerHTML = "";

  const termoBusca = inputBusca.value.toLowerCase().trim();
  const situacaoSelecionada = selectFiltro.value;

  // Filtra as atividades baseado nas entradas do Ricardo
  const atividadesFiltradas = operacao.atividades.filter(
    (atividade: Atividade) => {
      const funcionarioObj = operacao.funcionarios.find(
        (f: Funcionario) => f.id === atividade.idFuncionario,
      );
      const nomeFuncionario = funcionarioObj
        ? funcionarioObj.nome.toLowerCase()
        : "não alocado";

      const bateResponsavel = nomeFuncionario.includes(termoBusca);

      let statusReal = atividade.situacao;
      const hoje = new Date();
      if (atividade.situacao !== "Concluido" && atividade.prazo < hoje) {
        statusReal = "Atrasada";
      }

      const bateSituacao =
        situacaoSelecionada === "Todos" || statusReal === situacaoSelecionada;

      return bateResponsavel && bateSituacao;
    },
  );

  // Monta as linhas da tabela dinamicamente
  atividadesFiltradas.forEach((atividade: Atividade) => {
    // CORRIGIDO AQUI: Mudado de activity para atividade
    const funcionarioObj = operacao.funcionarios.find(
      (f: Funcionario) => f.id === atividade.idFuncionario,
    );
    const nomeFuncionario = funcionarioObj
      ? funcionarioObj.nome
      : "Não alocado";

    const tr = document.createElement("tr");

    let statusReal = atividade.situacao;
    let classeBadge = "badge-a-fazer";

    const hoje = new Date();
    hoje.setHours(0, 0, 0, 0);
    const dataPrazo = new Date(atividade.prazo);
    dataPrazo.setHours(0, 0, 0, 0);

    if (atividade.situacao !== "Concluido" && dataPrazo < hoje) {
      const diferencaTempo = hoje.getTime() - dataPrazo.getTime();
      const diferencaDias = Math.floor(diferencaTempo / (1000 * 60 * 60 * 24));

      statusReal = `⚠️ Atrasada (${diferencaDias} ${diferencaDias === 1 ? "dia" : "dias"})`;
      classeBadge = "badge-atrasada";
    } else if (atividade.situacao === "Em Andamento") {
      classeBadge = "badge-em-andamento";
    } else if (atividade.situacao === "Concluido") {
      classeBadge = "badge-concluido";
    }

    tr.innerHTML = `
      <td><strong>${atividade.nome}</strong></td>
      <td>${nomeFuncionario}</td>
      <td>${atividade.prazo.toLocaleDateString("pt-BR")}</td>
      <td><span class="badge ${classeBadge}" style="${classeBadge === "badge-atrasada" ? "background-color: #d32f2f; color: white; padding: 4px 8px; border-radius: 4px; font-weight: bold;" : ""}">${statusReal}</span></td>
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
