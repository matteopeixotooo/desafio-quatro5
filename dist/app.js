import { GerenciadorOperacao } from "./GerenciadorOperacao.js";
import { Atividade } from "./Atividade.js";
import { Funcionario } from "./Funcionario.js";
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
// 1. Lucas está AFOGADO (Acumulando 3 tarefas em andamento) -> Resolve a dor "Tem gente afogada de tarefa"
operacao.adicionarAtividade(new Atividade(101, "Ajustar Planilha de Custos", 1, amanha, "Em Andamento"));
operacao.adicionarAtividade(new Atividade(102, "Revisar Código do Sistema", 1, semanaQueVem, "Em Andamento"));
operacao.adicionarAtividade(new Atividade(103, "Configurar Servidor de Testes", 1, amanha, "Em Andamento"));
// 2. Beatriz tem uma tarefa que ESTOUROU o prazo -> Resolve a dor "Prazo combinado estoura e eu só sei depois"
operacao.adicionarAtividade(new Atividade(104, "Enviar Proposta para Cliente VIP", 2, ontem, "A Fazer"));
// 3. Bruno tem outra tarefa ATRASADA também -> Aumenta o número do indicador para alertar o Ricardo
operacao.adicionarAtividade(new Atividade(105, "Atualizar Cadastro do Fornecedor", 7, ontem, "Em Andamento"));
// 4. Mateus, Mariana e Amanda estão com carga normal (1 tarefa em andamento cada)
operacao.adicionarAtividade(new Atividade(106, "Desenvolver UI do Dashboard", 3, amanha, "Em Andamento"));
operacao.adicionarAtividade(new Atividade(107, "Homologar Banco de Dados", 4, semanaQueVem, "Em Andamento"));
operacao.adicionarAtividade(new Atividade(108, "Criar Artes para Redes Sociais", 6, amanha, "Em Andamento"));
// 5. Camila e Diego estão com tarefas planejadas, mas ainda não começaram ('A Fazer' não conta como carga ativa)
operacao.adicionarAtividade(new Atividade(109, "Planejar Reunião de SPRINT", 8, semanaQueVem, "A Fazer"));
operacao.adicionarAtividade(new Atividade(110, "Disparar E-mail Marketing", 9, amanha, "A Fazer"));
// 6. Fernanda concluiu o trabalho dela (Aparecerá com 0 tarefas ativas na lista)
operacao.adicionarAtividade(new Atividade(111, "Auditoria dos Contratos Antigos", 10, ontem, "Concluido"));
// 7. Thiago está totalmente ocioso
// Mandar a tela atualizar quando navegador finalizar a leitura o HTML
window.addEventListener("DOMContentLoaded", () => {
    operacao.atualizarTela();
});
