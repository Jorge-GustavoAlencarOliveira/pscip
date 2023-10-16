export function edificacaoExistente(medidas: string[], construcao: string) {
  if (construcao === 'Existente') {
    const final = medidas
      .filter((item) => item !== 'Acesso de viaturas')
      .filter((item1) => item1 !== 'Segurança Estrutural contra Incêndio')
      .filter((item2) => item2 !== 'Compartimentação Horizontal')
      .filter((item3) => item3 !== 'Compartimentação Vertical')
      .filter((item4) => item4 !== 'Chuveiros Automáticos')
      .filter((item5) => item5 !== 'Controle de Fumaça');
    return final;
  }
  return medidas;
}