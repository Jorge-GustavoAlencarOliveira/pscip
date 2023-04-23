import Extintor from './extintor';

interface indexProps {
  index: string;
}

const Cargaincendio = ({ index }: indexProps) => {
  const ocup = index;
  const cargaincendio = {
    'A-1': 300,
    'A-2': 300,
    'A-3': 300,
  };
  const carga = cargaincendio[ocup];

  return (
    <div>
      <h1>Carga incêndio</h1>
      <p>
        CLASSIFICAÇÃO DAS EDIFICAÇÕES E ESPAÇOS DESTINADOS AO USO COLETIVO
        QUANTO À CARGA DE INCÊNDIO
      </p>
      {carga <= 300 && <p>Risco Baixo - {carga} MJ/m²</p>}
      {carga > 300 && carga <= 1200 && <p>Risco Médio - {carga} MJ/m²</p>}
      {carga > 1200 && <p>Risco Alto - {carga} MJ/m²</p>}
    </div>
  );
};

export default Cargaincendio;
