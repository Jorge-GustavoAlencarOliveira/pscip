import React from 'react';
import TabelaSaidaEmergencia from './tabelaSaidaEmergencia';
import ModuloShow from './ModuloShow';
import { moduloReducer, pavimentoReducer } from './ModuloReducer';
import { handleCalcular, handleCalcular1 } from './Calculo';
import { toast } from 'react-toastify';
import ModalCenter from '../../Components/Modal/Modal';
let id = 1;

interface calculoSaidaProps {
  pavimento: string | undefined;
  onDelete: () => void;
}

const CalculoSaidas = ({ pavimento, onDelete }: calculoSaidaProps) => {
  const [modalShow, setModalShow] = React.useState(false)
  const { divisao } = TabelaSaidaEmergencia();
  const [div, setDiv] = React.useState<number>(0);
  const [area, setArea] = React.useState<string>('');
  const [dormitorio, setDormitorio] = React.useState<string>('');
  const [ambiente, setAmbiente] = React.useState('');
  const ref = React.useRef<HTMLInputElement>(null);
  const ref1 = React.useRef<HTMLInputElement>(null);
  const ref2 = React.useRef<HTMLInputElement>(null);
  const [modulo, dispatch] = React.useReducer(moduloReducer, []);

  function moduloAdd() {
    if (area === '' || ambiente === '')
      return alert('Preencha todos os campos!');
    const numberArea = Number(parseFloat(area.replace(/[^0-9,.]/g, '').replace(/[.]/g, '').replace(',', '.')))
    if(typeof numberArea !== "number" || Number.isNaN(numberArea)){
      return toast.info("Digite um número válido")
    }
      dispatch({
        type: 'add',
        id: id++,
        divisao: div,
        text: area,
        populacao: handleCalcular(numberArea, div)?.populacao,
        acesso: handleCalcular(numberArea, div)?.acesso,
        porta: handleCalcular(numberArea, div)?.porta,
        escada: handleCalcular(numberArea, div)?.escada,
        ambiente: ambiente,
      });
      setArea('');
      setAmbiente('');
    
  }

  function moduloAdd1() {
    if (area === '' || dormitorio === '' || ambiente === '')
      return alert('Preencha todos os campos!');
      const numberArea = Number(parseFloat(area.replace(/[^0-9,.]/g, '').replace(/[.]/g, '').replace(',', '.')))
      const numberDormitorio = Number(parseFloat(dormitorio.replace(/[^0-9,.]/g, '').replace(/[.]/g, '').replace(',', '.'))) 
      if(typeof numberArea !== "number" || typeof numberDormitorio !== "number" || Number.isNaN(numberArea) || Number.isNaN(numberDormitorio)){
        return toast.info("Digite um número válido")
      }
      dispatch({
        type: 'add1',
        id: id++,
        divisao: div,
        text: numberArea,
        text1: numberDormitorio,
        populacao: handleCalcular1(numberArea, numberDormitorio, div)?.populacao,
        acesso: handleCalcular1(numberArea, numberDormitorio, div)?.acesso,
        porta: handleCalcular1(numberArea, numberDormitorio, div)?.porta,
        escada: handleCalcular1(numberArea, numberDormitorio, div)?.escada,
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

  React.useEffect(() => {
    setArea('');
    setDormitorio('');
    setAmbiente('');
    if (ref.current) {
      ref.current.value = '';
    }
    if (ref1.current) {
      ref1.current.value = '';
    }
    if (ref2.current) {
      ref2.current.value = '';
    }
  }, [div]);

  function formatarNumero(value: string) {
    var v = value.replace(/\D/g,'');
    v = (+v/100).toFixed(2) + '';
    v = v.replace(".", ",");
    v = v.replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.');
    return v;
    }
  
  return (
    <div className="d-flex flex-column gap-2 mt-4 bg-light px-2 py-4">
      <div className="d-flex justify-content-between align-items-center my-3">
        <h5 className="fw-bold">Pavimento: {pavimento} </h5>
        <button className="btn btn-secondary" onClick={onDelete}>
          Excluir
        </button>
      </div>
      <button className='btn btn-primary' onClick={() => setModalShow(true)}>Adicionar ambiente</button>
      <ModalCenter show={modalShow} onHide={() => setModalShow(false)} header='Adicione um ambiente'>
        <div className="d-flex gap-2 form-group align-items-center">
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
                    ref={ref1}
                    className="form-control"
                  />
                </div>
                <div className="d-flex gap-2 form-group align-items-center">
                  <label>Vagas: </label>
                  <input
                    type="text"
                    placeholder="Vagas"
                    onChange={({ target }) => setArea(formatarNumero(target.value))}
                    ref={ref}
                    value={area}
                    className="form-control"
                  />
                </div>
                <div>
                  <button
                    className="btn btn-primary float-end my-3"
                    onClick={moduloAdd}
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
                    ref={ref1}
                    className="form-control"
                  />
                </div>
                <div className="d-flex gap-2 form-group align-items-center">
                  <label>Área: </label>
                  <input
                    type="text"
                    placeholder="area"
                    value={area}
                    onChange={({ target }) => setArea(formatarNumero(target.value))}
                    ref={ref}
                    className="form-control"
                  />
                </div>
                <div>
                  <button
                    className="btn btn-primary float-end my-3"
                    onClick={moduloAdd}
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
                ref={ref1}
                className="form-control"
              />
            </div>
            <div className="d-flex gap-2 form-group align-items-center">
              <label>Dormitórios: </label>
              <input
                type="text"
                placeholder="unidades"
                value={area}
                onChange={({ target }) => setArea(formatarNumero(target.value))}
                ref={ref}
                className="form-control"
              />
            </div>
            <div>
              <button
                className="btn btn-primary float-end my-3"
                onClick={moduloAdd}
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
                    ref={ref2}
                    className="form-control"
                  />
                </div>
                <div className="d-flex gap-2 form-group align-items-center">
                  <label>Área do ambulatório: </label>
                  <input
                    type="text"
                    placeholder="m²"
                    onChange={({ target }) => setArea(formatarNumero(target.value))}
                    ref={ref1}
                    value={area}
                    className="form-control"
                  />
                </div>
                <div className="d-flex gap-2 form-group align-items-center">
                  <label>Número de leitos:</label>
                  <input
                    type="text"
                    placeholder="unidade"
                    onChange={({ target }) => setDormitorio(formatarNumero(target.value))}
                    ref={ref}
                    value={dormitorio}
                    className="form-control"
                  />
                </div>
                <div>
                  <button
                    className="btn btn-primary float-end my-3"
                    onClick={moduloAdd1}
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
                    ref={ref2}
                    className="form-control "
                  />
                </div>
                <div className="d-flex gap-2 form-group align-items-center">
                  <label>Área de alojamento: </label>
                  <input
                    type="text"
                    placeholder="m²"
                    onChange={({ target }) => setArea(formatarNumero(target.value))}
                    ref={ref1}
                    value={area}
                    className="form-control"
                  />
                </div>
                <div className="d-flex gap-2 form-group align-items-center">
                  <label>Quantidade de dormitórios: </label>
                  <input
                    type="text"
                    placeholder="unidades"
                    onChange={({ target }) => setDormitorio(formatarNumero(target.value))}
                    ref={ref}
                    value={dormitorio}
                    className="form-control"
                  />
                </div>
                <div>
                  <button
                    className="btn btn-primary float-end my-3"
                    onClick={moduloAdd1}
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
