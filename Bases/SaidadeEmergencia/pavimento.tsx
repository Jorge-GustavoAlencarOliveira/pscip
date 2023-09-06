import React from 'react';
import { pavimentoReducer } from './ModuloReducer';
import { toast } from 'react-toastify';
import CalculoSaidas from './Saidas';
import ModalCenter from '../../Components/Modal/Modal';
let idPavimento = 1;

const Pavimento = () => {
  const [pavimento, dispatchPavimento] = React.useReducer(pavimentoReducer, []);
  const [nomePavimento, setNomePavimento] = React.useState('');
  const [modalShow, setModalShow] = React.useState(false);

  function pavimentoAdd() {
    if (nomePavimento === '') return toast.info('Dê um nome ao pavimento');
    dispatchPavimento({
      type: 'add',
      idPavimento: idPavimento++,
      pavimento: nomePavimento,
    });
  }

  function pavimentoDelete(id: number) {
    dispatchPavimento({
      type: 'delete',
      idPavimento: id,
    });
  }

  return (
    <div className="d-flex flex-column gap-2">
      <h1 className="text-primary">Dimensionamento de saídas de emergencia</h1>
      <button className='btn btn-primary' onClick={() => setModalShow(true)}>Adicionar Rota de Fuga</button>
      <ModalCenter header='Adicione uma rota de fuga' show={modalShow} onHide={() => setModalShow(false)}>
        <div className="d-flex flex-column gap-4">
          <div className="d-flex align-items-center gap-2">
            <label className="fw-bold">Nome: </label>
            <input
              type="text"
              onChange={({ target }) => setNomePavimento(target.value)}
              value={nomePavimento}
              className="form-control"
            />
          </div>
          <div>
            <button className="btn btn-primary float-end" onClick={() => {
              pavimentoAdd();
              setModalShow(false)
              setNomePavimento('')
            }}>
              Adicionar pavimento{' '}
            </button>
          </div>
        </div>
      </ModalCenter>
      {pavimento.map((item) => {
        return (
          <CalculoSaidas
            key={item.idPavimento}
            pavimento={item.pavimento}
            onDelete={() => pavimentoDelete(item.idPavimento)}
          />
        );
      })}
    </div>
  );
};

export default Pavimento;
