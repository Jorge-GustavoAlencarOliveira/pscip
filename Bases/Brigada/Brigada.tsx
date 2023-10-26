import React from 'react';
import BrigadaReducer from './BrigadaReducer';
import ModuloShow from './ModuloShow';
import { calculoBrigada } from './Calculo';
import { divisao } from '../../Tabelas/tabelaRedDivisao';
import ModalCenter from '../../Components/Modal/Modal';
import { toast } from 'react-toastify';
import { somenteInteiro, cleanNumberInteiro } from '../formatarNumero';

let id = 1;

const Brigada = () => {
  const [ocupacao, setOcupacao] = React.useState<number>(0);
  const [pavimento, setPavimento] = React.useState<string>('');
  const [populacao, setPopulacao] = React.useState<string>('');
  const [modulos, dispatch] = React.useReducer(BrigadaReducer, []);
  const [modalShow, setModalShow] = React.useState(false);
  const [modalShow1, setModalShow1] = React.useState(false);
  function handleAdd() {
    if (populacao === '' || pavimento === '')
      return toast.info('Preencha todos os campos!');
    dispatch({
      type: 'add',
      id: id++,
      pavimento: pavimento,
      brigadistas: calculoBrigada(ocupacao, +populacao),
      divisao: ocupacao,
      populacao: cleanNumberInteiro(populacao),
    });
    setPavimento('');
    setPopulacao('');
  }

  function handleDelete(id: number) {
    dispatch({
      type: 'delete',
      id: id,
    });
  }

  return (
    <>
      <div className="d-flex">
        <h5 className="text-primary">Dimensionamento de Brigada de incêndio</h5>
        <button
          className="btn btn-primary ms-auto"
          onClick={() => setModalShow(true)}
        >
          Calcular Brigada
        </button>
      </div>
      <ModalCenter
        size="lg"
        header="Preencha as informações"
        show={modalShow}
        onHide={() => setModalShow(false)}
      >
        <div className="d-flex flex-column gap-2">
          <div className="d-flex gap-2 align-items-center">
            <label>Divisão:</label>
            <select
              onChange={({ target }) => setOcupacao(Number(+target.value))}
              className="form-select"
            >
              {divisao.map((item, index) => {
                return (
                  <option key={index} value={index}>
                    {item}
                  </option>
                );
              })}
            </select>
          </div>
          <div className="d-flex gap-2 align-items-center">
            <label>Pavimento: </label>
            <input
              type="text"
              value={pavimento}
              onChange={({ target }) => setPavimento(target.value)}
              placeholder="Nome do pavimento"
              className="form-control"
            />
          </div>
          <div className="d-flex gap-2 align-items-center">
            <label className='text-nowrap'>População fixa: </label>
            <input
              type="text"
              placeholder="Quantidade de pessoas"
              value={populacao}
              onChange={({ target }) => setPopulacao(somenteInteiro(target.value))}
              className="form-control"
            />
          </div>
          <div>
            <button
              className="btn btn-primary float-end my-2"
              onClick={handleAdd}
            >
              Adicionar
            </button>
          </div>
          <ModuloShow onDelete={handleDelete} modulos={modulos} />
        </div>
      </ModalCenter>
      {modulos.length !== 0 && (
        <button className="btn btn-primary" onClick={() => setModalShow1(true)}>
          Quadro Resumo
        </button>
      )}
      <ModalCenter
        size="xl"
        header="Brigada de incêndio"
        show={modalShow1}
        onHide={() => setModalShow1(false)}
      >
        <ModuloShow onDelete={handleDelete} modulos={modulos} />
      </ModalCenter>
    </>
  );
};

export default Brigada;
