interface trein {
  exigido: string;
  recomendado: string;
}

interface numero {
  numero: string;
  treinamento: trein;
}

interface brig {
  'A-1': string;
  'A-2': numero;
  'A-3': {};
}

type numeros = {
  'A-1': string;
  'A-2': numero;
  'A-3': {};
};

const brigada: numeros = {
  'A-1': 'Isento',
  'A-2': {
    numero:
      'Todos os empregados da edificação deverão compor a brigada de incêndio e, caso não haja empregados, recomenda-se que haja treinamento da população para evacuação e utilização dos equipamentos e medidas preventivas da edificação.',
    treinamento: {
      exigido: 'Básico',
      recomendado: 'Básico',
    },
  },
  'A-3': {},
};

const Brigada = ({ index }: string | any) => {
  const ocup = index;
  const valor = brigada[index as keyof brig];
  const A2 = brigada['A-2'];
  const numero = A2.numero;
  const treinamentoe = A2.treinamento.exigido;
  const treinamentor = A2.treinamento.recomendado;

  return (
    <div>
      <h1>Brigada de incêndio</h1>
      <p>{numero}</p>
      <p>Nível de Treinamento exigido: {treinamentoe}</p>
      <p>Nível de Treinamento recomendado: {treinamentor}</p>
    </div>
  );
};
export default Brigada;
