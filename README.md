# 📊 Desafio Quatro5 - Painel de Controle de Gestão (Time do Ricardo)

Este projeto consiste em uma solução de inteligência operacional projetada sob medida para resolver os gargalos de gestão de uma PME com 10 colaboradores. A aplicação mitiga as duas maiores dores do gestor Ricardo: a falta de visibilidade sobre quem está ocioso ou sobrecarregado e a descoberta tardia de prazos estourados.

---

## 🚀 Como Rodar o Projeto (Passo a Passo)

### 🌐 Execução Online

Acesse o painel em funcionamento direto pelo navegador:
👉 **[Clique aqui para abrir o Painel de Controle do Ricardo](https://matteopeixotooo.github.io/desafio-quatro5/)**

### 💻 Execução Local

1. Clone o repositório e acesse a pasta do projeto:
   '''bash
   git clone https://github.com/matteopeixotooo/desafio-quatro5.git
   cd desafio-quatro5
   '''

2. Abra o arquivo index.html no navegador (ou via extensão Live Server) para visualizar o painel em funcionamento.

---

## 🧠 Metodologia e Caminho Escolhido

Como o uso de TypeScript já era obrigatório no desafio, a minha estratégia foi focar em organizar o código usando Programação Orientada a Objetos (POO) para o projeto não virar uma bagunça de funções soltas.

### Como o código foi pensado:

- **Separar a lógica do visual (HTML/CSS):** Deixei o HTML e o CSS cuidando apenas de criar a tabela e os alertas na tela. Toda a parte de fazer contas, checar prazos e ver quem está sobrecarregado foi feita dentro de arquivos TypeScript separados (`Funcionario.ts`, `Atividade.ts`, `GerenciadorOperacao.ts`). Assim, se eu precisar mudar o visual da tela depois, não mexo na lógica que faz os cálculos funcionarem.
- **Uso de Classes para o Time:** Criei classes para representar os funcionários e as tarefas. Os métodos dentro dessas classes cuidam de atualizar o status e validar os dados de forma automática antes de mandar a informação final para aparecer na tela.
- **Segurança com TypeScript:** Aproveitei a tipagem do TypeScript para travar os status das tarefas (como `Em Andamento` e `Concluída`). Isso evita erros bobos de digitação que poderiam quebrar os indicadores ou mostrar gráficos errados para o Ricardo.

---

## 📈 Justificativa de Cada Indicador (KPI)

O painel foca em resolver dores reais de tomada de decisão, evitando métricas de vaidade. Cada indicador cumpre um papel estratégico:

1. Quantidade de Tarefas Atrasadas (KPI de Alerta Crítico):
   - Justificativa: Ataca diretamente a dor do Ricardo de "descobrir que o prazo estourou apenas quando o cliente reclama". O indicador monitora em tempo real tarefas que não estão concluídas e cujo prazo é menor que a data atual, permitindo uma cobrança proativa antes do desgaste com o cliente.
2. Lista de Carga de Trabalho por Funcionário (Índice de Alocação):
   - Justificativa: Ataca a dor de "descobrir quem está afogado e quem está ocioso". Computa exclusivamente tarefas com a situação Em Andamento. Se um colaborador acumula muitos itens ativos (ex: Lucas com 3), indica sobrecarga. Se está zerado (ex: Thiago com 0), indica ociosidade, permitindo ao Ricardo remanejar tarefas de forma analítica e equilibrada.
3. Tabela Geral com Crachás Dinâmicos:
   - Justificativa: Centralização visual do fluxo operacional, permitindo auditoria rápida do status e prazos da operação em uma única tela.

---

## ✂️ O que foi Cortado para caber no Prazo

Para garantir a entrega de um MVP (Minimum Viable Product) funcional e focado no problema do Ricardo dentro do prazo estipulado, os seguintes escopos foram despriorizados:

- Persistência em Banco de Dados / LocalStorage: O sistema atualmente opera em memória volátil, redefinindo os dados ao atualizar a página.
- Formulários Interativos de Cadastro: A interface foca estritamente na visualização e inteligência dos dados carregados do time (cumprindo a regra de fornecer dados fictícios de exemplo).
- Autenticação e Níveis de Acesso: O painel assume o perfil único de administrador/gestor (Ricardo).

---

## 🔮 O que seria feito com Mais Tempo (Próximos Passos)

Com um cronograma estendido, a evolução do produto seguiria o seguinte roadmap:

1. Persistência de Dados: Implementação de conexão com uma API REST ou banco de dados noSQL para salvar criação e edição de tarefas.
2. Funcionalidades de CRUD Completo: Criação de telas e modais para permitir que o Ricardo adicione, edite responsáveis e conclua tarefas diretamente pela interface gráfica.
3. Módulo de Notificações Próximas ao Prazo: Um sistema de alertas em amarelo no painel para tarefas que vão vencer nas próximas 24 horas, agindo preventivamente antes que o indicador se torne vermelho (atrasado).
4. Gráficos de Performance: Integração de bibliotecas para exibir gráficos de linha históricos sobre a evolução de produtividade do time e taxa de entregas dentro do prazo.
