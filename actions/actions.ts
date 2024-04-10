import { setupAPIClient } from "@/services/api";
import { informacoesProps } from "../Components/Hooks/useDados";
import { RegiaomoduloProps } from "../Components/Regiao-ocupacao/regiaoReducer";
import { moduloPropsGerenciamento } from "../Components/Hooks/useGerenciamento";

const api = setupAPIClient()

export async function handleUpdateProject(data: informacoesProps, id: string) {
  try {
    await api.put('/project/informacoes', {
      dados: data,
      id: id,
      status: true
    });
  } catch (err) {
    console.log(err);
  }
}

export async function updateEdificacao(project_id: string, regioes: RegiaomoduloProps[]) {
  try {
    await api.put('/project/edificacao', {
      id: project_id,
      edificacao: regioes,
    });
  } catch (err) {
    console.log(err);
  }
}

export async function updateMedidasdeSeguranca(project_id: string, medidas: string[]) {
  try {
    await api.put('/project/medidasseguranca', {
      id: project_id,
      medidasSeguranca: medidas,
    });
  } catch (err) {
    console.log(err);
  }
}

export async function updateRiscosEspeciais(project_id: string, listChecked: string[]) {
  try {
    await api.put('/project/riscosespeciais', {
      id: project_id,
      riscosEspeciais: listChecked,
    });
  } catch (err) {
    console.log(err);
  }
}

export async function updateNiveldeRisco(project_id: string, nivel: unknown ,niveldeRiscoDados: unknown) {
  try {
    await api.put('/project/nivelrisco', {
      id: project_id,
      nivelRisco: {
        nivel: nivel,
        props: niveldeRiscoDados,
      },
    });
  } catch (err) {
    console.log(err);
  }
}

export async function updateGerenciamento(project_id: string, gerenciamento: {status: number, observacoes: moduloPropsGerenciamento[]}) {
  try {
    await api.put('/project/gerenciamento', {
      id: project_id,
     gerenciamento: gerenciamento
    });
    console.log('foi');
  } catch (err) {
    console.log(err);
  }
}