import React from 'react';
import TabelaBrigada from './TabelaBrigada';
import BrigadaReducer from './BrigadaReducer';
import ModuloShow from './ModuloShow';
import { calculoBrigada } from './Calculo';

let id = 1;

const Brigada = () => {
  const { divisao } = TabelaBrigada();
  const [ocupacao, setOcupacao] = React.useState<number>(0);
  const [pavimento, setPavimento] = React.useState<string>('');
  const [populacao, setPopulacao] = React.useState<number | string>('');
  const [modulos, dispatch] = React.useReducer(BrigadaReducer, []);

  function handleAdd() {
    if (populacao === '' || pavimento === '')
      return alert('Preencha todos os campos!');
    dispatch({
        type: 'add',
        id: id++,
        pavimento: pavimento,
        brigadistas: calculoBrigada(ocupacao, +populacao),
        divisao: ocupacao,
        populacao: +populacao
      });
    setPavimento('');
    setPopulacao('');
  }


  function handleDelete (id: number){
    dispatch({
      type: 'delete',
      id: id
    })
  }

  console.log(modulos)

  return (
    <>
      <h1>Dimensionamento de Brigada de incêndio</h1>
      <div>
        <label>Divisão:</label>
        <select onChange={({ target }) => setOcupacao(Number(+target.value))}>
          {divisao.map((item, index) => {
            return (
              <option key={index} value={index}>
                {item}
              </option>
            );
          })}
        </select>
        <label>Pavimento: </label>
        <input
          type="text"
          value={pavimento}
          onChange={({ target }) => setPavimento(target.value)}
          placeholder="Nome do pavimento"
        />
        <label>População fixa: </label>
        <input
          type="text"
          placeholder="Quantidade de pessoas"
          value={populacao}
          onChange={({ target }) => setPopulacao(+target.value)}
        />
        <button onClick={handleAdd}>Adicionar</button>
      </div>
      <ModuloShow onDelete={handleDelete} modulos={modulos}/>
    </>
  );
};

export default Brigada;

