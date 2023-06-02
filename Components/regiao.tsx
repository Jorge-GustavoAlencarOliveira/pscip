import React from 'react'
import RegiaoModulo from './regiaomodulo';
import { DataStorage } from '../dataContext';
import { useRouter } from 'next/router';

interface dadosProps {
  areaConstruida: string;
  areaAconstruir: string;
  altura: string;
  pavimentos: string;
  areaTotal: number;
  cargaIncendio: number[];
  dataConstrucao: string;
}
type array = [dadosProps, number[][]]

const Regioes = () => {
  const router = useRouter()
  const [numeroRegiao, setNumeroRegiao] = React.useState<number[]>([0]);
  const [valorRegiao, setValorRegiao] = React.useState<Array<array>>([[{areaConstruida: '',
  areaAconstruir: '',
  altura: '',
  pavimentos: '',
  areaTotal: 0,
  cargaIncendio: [],
  dataConstrucao: ''
},[]]]);
  const [count, setCount] = React.useState(1);
  const {valoresOcupacao,setValoresOcupacao} = React.useContext(DataStorage)
 
  function handleAdd() {
    setCount((item) => item + 1);
    setNumeroRegiao((item) => [...item, count]);
    setValorRegiao((item) => [...item, [{areaConstruida: '',
    areaAconstruir: '',
    altura: '',
    pavimentos: '',
    areaTotal: 0,
    cargaIncendio: [],
   dataConstrucao: ''
  },[]]]);
  }

  function handleNext(){
    setValoresOcupacao(valorRegiao)
    router.push('/result')
  }
  console.log(valorRegiao)

  return (
    <div>
      <button style={{ float: 'right' }} onClick={handleAdd}>
        Adicionar Regiao
      </button>
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
      <button onClick={handleNext}>Proximo</button>
    </div>
  );
};

export default Regioes;
