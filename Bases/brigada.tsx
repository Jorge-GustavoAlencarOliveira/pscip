const brigada = {
  'A-1': 'Isento',
  'A-2': {
    numero: 'Todos os empregados da edificação deverão compor a brigada de incêndio e, caso não haja empregados, recomenda-se que haja treinamento da população para evacuação e utilização dos equipamentos e medidas preventivas da edificação.',
    treinamento: {
      exigido: "Básico",
      recomendado: "Básico"
    }
  },
  'A-3': {}
}

const Brigada = ({index}:string | any) => {
  const ocup = index;
  const valor = brigada[ocup];
  return (
    <div>
      <h1>Brigada de incêndio</h1>
      <p>{valor.numero}</p>
      <p>Nível de Treinamento exigido: {valor.treinamento.exigido}</p>
      <p>Nível de Treinamento recomendado: {valor.treinamento.recomendado}</p>
    </div>
  );
};
export default Brigada;
