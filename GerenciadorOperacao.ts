import { Atividade } from "./Atividade.js";
import { Funcionario } from "./Funcionario.js";

export class GerenciadorOperacao {
  private _funcionarios: Funcionario[] = [];
  private _atividades: Atividade[] = [];

  // Getters para permitir que o app.ts leia as listas sem violar o encapsulamento
  public get funcionarios(): Funcionario[] {
    return this._funcionarios;
  }

  public get atividades(): Atividade[] {
    return this._atividades;
  }

  public adicionarFuncionario(funcionario: Funcionario): void {
    this._funcionarios.push(funcionario);
  }

  public adicionarAtividade(atividade: Atividade): void {
    this._atividades.push(atividade);
  }

  public atualizarTela(): void {
    const elementoAtrasadas = document.getElementById("quantidade-atrasadas");
    const elementoCarga = document.getElementById("lista-carga-trabalho");
    const hoje = new Date();

    // 1. Calcula o total de tarefas atrasadas (não concluídas e com prazo vencido)
    const totalAtrasadas = this._atividades.filter(
      (a) => a.situacao !== "Concluido" && a.prazo < hoje,
    ).length;

    if (elementoAtrasadas) {
      elementoAtrasadas.textContent = totalAtrasadas.toString();
    }

    // 2. Calcula a carga de trabalho atual por funcionário (apenas 'Em Andamento')
    if (elementoCarga) {
      elementoCarga.innerHTML = "";
      this._funcionarios.forEach((f) => {
        const tarefasAtivas = this._atividades.filter(
          (a) => a.idFuncionario === f.id && a.situacao === "Em Andamento",
        ).length;

        const item = document.createElement("div");
        item.className = "item-funcionario";
        item.style.display = "flex";
        item.style.justifyContent = "space-between";
        item.style.marginBottom = "8px";

        // Aplica destaque visual se o funcionário estiver sobrecarregado (ex: Lucas com 3)
        const estiloDestaque =
          tarefasAtivas >= 3 ? "color: #d32f2f; font-weight: bold;" : "";

        item.innerHTML = `
          <span>${f.nome}</span>
          <span style="${estiloDestaque}">${tarefasAtivas} em andamento</span>
        `;
        elementoCarga.appendChild(item);
      });
    }
  }
}
