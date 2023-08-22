import React from 'react';
import RegiaoModulo from './regiaomodulo';
import { DataStorage } from '../dataContext';
import { useRouter } from 'next/router';

interface dadosProps {
  areaConstruida: string;
  areaAconstruir: string;
  altura: string;
  pavimentos: string;
  areaTotal: number;
  dataConstrucao: string;
  compartimentacao: string;
}
type array = [dadosProps, number[][]];

interface ocupacaoProps{
  nextsection: () => void
}

const Regioes = ({nextsection}:ocupacaoProps) => {
  const router = useRouter();
  const [numeroRegiao, setNumeroRegiao] = React.useState<number[]>([0]);
  const [valorRegiao, setValorRegiao] = React.useState<Array<array>>([
    [
      {
        areaConstruida: '',
        areaAconstruir: '',
        altura: '',
        pavimentos: '',
        areaTotal: 0,
        dataConstrucao: 'Nova',
        compartimentacao: 'compartimentacaoNao',
      },
      [],
    ],
  ]);
  const [count, setCount] = React.useState(1);
  const { valoresOcupacao, valoresRegiao } = React.useContext(DataStorage);
  const scrollToBottom = React.useRef<HTMLDivElement>(null);

  function handleAdd() {
    setCount((item) => item + 1);
    setNumeroRegiao((item) => [...item, count]);
    setValorRegiao((item) => [
      ...item,
      [
        {
          areaConstruida: '',
          areaAconstruir: '',
          altura: '',
          pavimentos: '',
          areaTotal: 0,
          cargaIncendio: [],
          dataConstrucao: 'Nova',
          compartimentacao: 'compartimentacaoNao',
        },
        [],
      ],
    ]);
    if (scrollToBottom.current)
      scrollToBottom.current.scrollIntoView({
        behavior: 'smooth',
        block: 'end',
      });
  }

  function handleNext() {
    valoresRegiao(valorRegiao);
    nextsection();
  }


  return (
    <div ref={scrollToBottom} className="d-flex flex-column">
      <div>
        <button className="float-end btn btn-secondary" onClick={handleAdd}>
          Adicionar Regiao
        </button>
      </div>
      {numeroRegiao.map((item, index) => {
        return (
          <RegiaoModulo
            key={item}
            numero={index}
            numeroRegiao={numeroRegiao}
            setNumeroRegiao={setNumeroRegiao}
            valorRegiao={valorRegiao}
            setValorRegiao={setValorRegiao}
          />
        );
      })}
      <div>
        <button
          className="btn btn-primary float-end btn-sm-lg mb-3"
          onClick={handleNext}
        >
          Proximo
        </button>
      </div>
    </div>
  );
};

export default Regioes;
