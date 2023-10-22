import React from 'react';
import TabelaSaidaEmergencia from './tabelaSaidaEmergencia';
import ModuloShow from './ModuloShow';
import { moduloReducer } from './ModuloReducer';
import { handleCalcular, handleCalcular1 } from './Calculo';
import { toast } from 'react-toastify';
import ModalCenter from '../../Components/Modal/Modal';
import { somenteInteiro, formatarNumero } from '../formatarNumero';

let id = 1;

interface calculoSaidaProps {
  pavimento: string | undefined;
  onDelete: () => void;
}

const CalculoSaidas = ({ pavimento, onDelete }: calculoSaidaProps) => {
  const [modalShow, setModalShow] = React.useState(false);
  const { divisao } = TabelaSaidaEmergencia();
  const [div, setDiv] = React.useState<number>(0);
  const [area, setArea] = React.useState<string>('');
  const [dormitorio, setDormitorio] = React.useState<string>('');
  const [ambiente, setAmbiente] = React.useState('');
  const [modulo, dispatch] = React.useReducer(moduloReducer, []);

  function cleanNumber(value: string) {
    const numero = Number(
      parseFloat(
        value
          .replace(/[^0-9,.]/g, '')
          .replace(/[.]/g, '')
          .replace(',', '.'),
      ),
    );
    return numero;
  }

  function moduloAdd() {
    if (area === '' || ambiente === '')
      return toast.info('Preencha todos os campos!');
    const numberArea = cleanNumber(area);
    dispatch({
      type: 'add',
      id: id++,
      divisao: div,
      text: area,
      populacao: handleCalcular(numberArea, div)?.populacao,
      acesso: +handleCalcular(numberArea, div)?.acesso,
      porta: +handleCalcular(numberArea, div)?.porta,
      escada: +handleCalcular(numberArea, div)?.escada,
      ambiente: ambiente,
    });
    setArea('');
    setAmbiente('');
  }

  function moduloAdd1() {
    if (area === '' || dormitorio === '' || ambiente === '')
      return toast.info('Preencha todos os campos!');

    const numberArea = cleanNumber(area);
    const numberDormitorio = cleanNumber(dormitorio);

    dispatch({
      type: 'add1',
      id: id++,
      divisao: div,
      text: numberArea,
      text1: numberDormitorio,
      populacao: handleCalcular1(numberArea, numberDormitorio, div)?.populacao,
      acesso: +handleCalcular1(numberArea, numberDormitorio, div)?.acesso,
      porta: +handleCalcular1(numberArea, numberDormitorio, div)?.porta,
      escada: +handleCalcular1(numberArea, numberDormitorio, div)?.escada,
      ambiente: ambiente,
    });
    setArea('');
    setAmbiente('');
    setDormitorio('');
  }

  function moduloDelete(id: number) {
    dispatch({
      type: 'delete',
      id: id,
    });
  }

  return (
    <div className="d-flex flex-column gap-2 mt-4 bg-light px-2 py-4">
      <div className="d-flex justify-content-between align-items-center my-3">
        <h5 className="fw-bold">Rota de fuga: {pavimento} </h5>
        <div>
          <button
            className="btn btn-primary me-2"
            onClick={() => {
              setModalShow(true);
              setDiv(0);
            }}
          >
            Adicionar ambiente
          </button>
          <button className="btn btn-secondary" onClick={onDelete}>
            Excluir
          </button>
        </div>
      </div>
      <ModalCenter
        show={modalShow}
        onHide={() => setModalShow(false)}
        header="Adicione um ambiente"
      >
        <div className="d-flex gap-2 form-group align-items-center mb-2">
          <span>Divisão: </span>
          <select
            onChange={({ target }) => setDiv(+target.value)}
            className="form-select"
          >
            {divisao.map((item, index) => {
              return (
                <option key={index} value={index}>
                  {item[0]}
                </option>
              );
            })}
          </select>
        </div>
        {div !== 0 && div !== 2 && div !== 1 && div !== 35 && div !== 36 && (
          <div>
            {div === 29 ? (
              <div className="d-flex flex-column gap-2">
                <div className="d-flex gap-2 form-group align-items-center">
                  <label>Ambiente: </label>
                  <input
                    type="text"
                    placeholder="Nome do Ambiente"
                    onChange={({ target }) => setAmbiente(target.value)}
                    value={ambiente}
                    className="form-control"
                  />
                </div>
                <div className="d-flex gap-2 form-group align-items-center">
                  <label>Vagas: </label>
                  <input
                    type="text"
                    placeholder="Vagas"
                    onChange={({ target }) =>
                      setArea(somenteInteiro(target.value))
                    }
                    value={area}
                    className="form-control"
                  />
                </div>
                <div>
                  <button
                    className="btn btn-primary float-end my-3"
                    onClick={() => {
                      moduloAdd();
                      setModalShow(false);
                    }}
                  >
                    Adicionar
                  </button>
                </div>
              </div>
            ) : (
              <div className="d-flex flex-column gap-2">
                <div className="d-flex gap-2 form-group align-items-center">
                  <label>Ambiente: </label>
                  <input
                    type="text"
                    placeholder="Nome do Ambiente"
                    onChange={({ target }) => setAmbiente(target.value)}
                    value={ambiente}
                    className="form-control"
                  />
                </div>
                <div className="d-flex gap-2 form-group align-items-center">
                  <label>Área: </label>
                  <input
                    type="text"
                    placeholder="area"
                    value={`${area} m²`}
                    onChange={({ target }) =>
                      setArea(formatarNumero(target.value))
                    }
                    className="form-control"
                  />
                </div>
                <div>
                  <button
                    className="btn btn-primary float-end my-3"
                    onClick={() => {
                      moduloAdd();
                      setModalShow(false);
                    }}
                  >
                    Adicionar
                  </button>
                </div>
              </div>
            )}
          </div>
        )}
        {(div === 0 || div === 1) && (
          <div className="d-flex flex-column gap-2">
            <div className="d-flex gap-2 form-group align-items-center">
              <label>Ambiente: </label>
              <input
                type="text"
                placeholder="Nome do Ambiente"
                onChange={({ target }) => setAmbiente(target.value)}
                value={ambiente}
                className="form-control"
              />
            </div>
            <div className="d-flex gap-2 form-group align-items-center">
              <label>Dormitórios: </label>
              <input
                type="text"
                placeholder="unidades"
                value={area}
                onChange={({ target }) => setArea(somenteInteiro(target.value))}
                className="form-control"
              />
            </div>
            <div>
              <button
                className="btn btn-primary float-end my-3"
                onClick={() => {
                  moduloAdd();
                  setModalShow(false);
                }}
              >
                Adicionar
              </button>
            </div>
          </div>
        )}
        {(div === 2 || div === 35 || div === 36) && (
          <div className="d-flex flex-column gap-2">
            {div === 36 ? (
              <div>
                <div className="d-flex gap-2 form-group align-items-center">
                  <label>Ambiente: </label>
                  <input
                    type="text"
                    placeholder="Nome do Ambiente"
                    onChange={({ target }) => setAmbiente(target.value)}
                    value={ambiente}
                    className="form-control"
                  />
                </div>
                <div className="d-flex gap-2 form-group align-items-center text-nowrap">
                  <label>Área do ambulatório: </label>
                  <input
                    type="text"
                    placeholder="m²"
                    onChange={({ target }) =>
                      setArea(formatarNumero(target.value))
                    }
                    value={`${area} m²`}
                    className="form-control"
                  />
                </div>
                <div className="d-flex gap-2 form-group align-items-center text-nowrap">
                  <label>Número de leitos:</label>
                  <input
                    type="text"
                    placeholder="unidade"
                    onChange={({ target }) =>
                      setDormitorio(somenteInteiro(target.value))
                    }
                    value={dormitorio}
                    className="form-control"
                  />
                </div>
                <div>
                  <button
                    className="btn btn-primary float-end my-3"
                    onClick={() => {
                      moduloAdd1();
                      setModalShow(false);
                    }}
                  >
                    Adicionar
                  </button>
                </div>
                <br />
              </div>
            ) : (
              <div className="d-flex flex-column gap-2">
                <div className="d-flex gap-2 form-group align-items-center">
                  <label>Ambiente: </label>
                  <input
                    type="text"
                    placeholder="Nome do Ambiente"
                    onChange={({ target }) => setAmbiente(target.value)}
                    value={ambiente}
                    className="form-control "
                  />
                </div>
                <div className="d-flex gap-2 form-group align-items-center text-nowrap">
                  <label>Área de alojamento: </label>
                  <input
                    type="text"
                    placeholder="m²"
                    onChange={({ target }) =>
                      setArea(formatarNumero(target.value))
                    }
                    value={`${area} m²`}
                    className="form-control"
                  />
                </div>
                <div className="d-flex gap-2 form-group align-items-center text-nowrap">
                  <label>Quantidade de dormitórios: </label>
                  <input
                    type="text"
                    placeholder="unidades"
                    onChange={({ target }) =>
                      setDormitorio(somenteInteiro(target.value))
                    }
                    value={dormitorio}
                    className="form-control"
                  />
                </div>
                <div>
                  <button
                    className="btn btn-primary float-end my-3"
                    onClick={() => {
                      moduloAdd1();
                      setModalShow(false);
                    }}
                  >
                    Adicionar
                  </button>
                </div>
              </div>
            )}
          </div>
        )}
      </ModalCenter>
      <div className="my-4">
        <ModuloShow modulos={modulo} onDeleteModulos={moduloDelete} />
      </div>
    </div>
  );
};

export default CalculoSaidas;
