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

Como o uso de TypeScript já era obrigatório no desafio, a minha estratégia foi focar em organizar o código usando Programação Orientada a Objetos (POO) e manipulação dinâmica do DOM para garantir uma experiência interativa e escalável.

### Como o código foi pensado:

- **Separar a lógica do visual (HTML/CSS):** Deixei o HTML e o CSS cuidando apenas de renderizar a estrutura e a estilização. Toda a parte de regras de negócio, checagem de prazos e estados foi feita dentro de arquivos TypeScript isolados (`Funcionario.ts`, `Atividade.ts`, `GerenciadorOperacao.ts`), expondo os dados de forma segura através de **Getters públicos (Encapsulamento)**.
- **Interatividade e Controle em Tempo Real (Reatividade):** O painel intercepta os eventos de digitação e seleção do usuário. A tabela é limpa e reconstruída sob demanda na camada de visualização através de filtros combinados, permitindo ao Ricardo isolar gargalos instantaneamente sem precisar recarregar a página.
- **Segurança com TypeScript:** Aproveitei a tipagem estrita do TypeScript (`strict: true`) para travar os status das tarefas e os modelos de dados, mitigando o risco de propriedades indefinidas (`undefined`) ou tipos genéricos (`any`) em produção.

### Como o código foi pensado:

- **Separar a lógica do visual (HTML/CSS):** Deixei o HTML e o CSS cuidando apenas de criar a tabela e os alertas na tela. Toda a parte de fazer contas, checar prazos e ver quem está sobrecarregado foi feita dentro de arquivos TypeScript separados (`Funcionario.ts`, `Atividade.ts`, `GerenciadorOperacao.ts`). Assim, se eu precisar mudar o visual da tela depois, não mexo na lógica que faz os cálculos funcionarem.
- **Uso de Classes para o Time:** Criei classes para representar os funcionários e as tarefas. Os métodos dentro dessas classes cuidam de atualizar o status e validar os dados de forma automática antes de mandar a informação final para aparecer na tela.
- **Segurança com TypeScript:** Aproveitei a tipagem do TypeScript para travar os status das tarefas (como `Em Andamento` e `Concluída`). Isso evita erros bobos de digitação que poderiam quebrar os indicadores ou mostrar gráficos errados para o Ricardo.

---

## 📈 Justificativa de Cada Indicador (KPI) e Recursos Visuais

O painel foca em resolver dores reais de tomada de decisão, evitando métricas de vaidade. Cada indicador e recurso cumpre um papel estratégico:

1. **Quantidade de Tarefas Atrasadas (KPI de Alerta Crítico):**
   - Justificativa: Ataca diretamente a dor do Ricardo de "descobrir que o prazo estourou apenas quando o cliente reclama". O indicador monitora em tempo real tarefas que não estão concluídas e cujo prazo é menor que a data atual.
2. **Cálculo Dinâmico de Dias de Atraso (Auditoria de Impacto):**
   - Justificativa: Directamente na tabela, o sistema realiza a subtração matemática entre os milissegundos da data atual e do prazo estipulado. O crachá da situação muda para vermelho vivo e exibe o impacto real do atraso (ex: `⚠️ Atrasada (2 dias)`), permitindo ao gestor priorizar o que está mais crítico.
3. **Lista de Carga de Trabalho por Funcionário (Índice de Alocação):**
   - Justificativa: Computa exclusivamente tarefas `Em Andamento`. Se um colaborador acumula 3 ou mais itens ativos, o sistema dispara um alerta visual vermelho e em negrito no nome dele (indicando sobrecarga). Se está zerado, indica ociosidade, permitindo o remanejamento analítico do trabalho.
4. **Filtros Combinados de Busca (Controle do Gestor):**
   - Justificativa: Uma barra de pesquisa por texto (input por nome do funcionário) integrada a um menu de seleção por situação (`select`). O Ricardo dita exatamente o recorte que quer analisar da operação de forma instantânea.

---

## ✂️ O que foi Cortado para caber no Prazo

Para garantir a entrega de um MVP (Minimum Viable Product) funcional de alta qualidade para o Ricardo dentro do prazo estipulado, os seguintes escopos de infraestrutura foram despriorizados:

- **Persistência em Banco de Dados / LocalStorage:** O sistema atualmente opera em memória volátil, utilizando o cenário hipotético solicitado para testar os motores de cálculo.
- **Formulários de Criação (CRUD Completo de Inserção):** O foco da interface foi blindar a experiência de inteligência e filtragem de dados de visualização do gestor (cumprindo a regra de fornecer os dados fictícios estruturados de exemplo).
- **Autenticação e Níveis de Acesso:** O painel assume o perfil único de administrador/gestor (Ricardo).

---

## 🔮 O que seria feito com Mais Tempo (Próximos Passos)

Com um cronograma estendido, a evolução do produto seguiria o seguinte roadmap:

1. Persistência de Dados: Implementação de conexão com uma API REST ou banco de dados noSQL para salvar criação e edição de tarefas.
2. Funcionalidades de CRUD Completo: Criação de telas e modais para permitir que o Ricardo adicione, edite responsáveis e conclua tarefas diretamente pela interface gráfica.
3. Módulo de Notificações Próximas ao Prazo: Um sistema de alertas em amarelo no painel para tarefas que vão vencer nas próximas 24 horas, agindo preventivamente antes que o indicador se torne vermelho (atrasado).
4. Gráficos de Performance: Integração de bibliotecas para exibir gráficos de linha históricos sobre a evolução de produtividade do time e taxa de entregas dentro do prazo.
