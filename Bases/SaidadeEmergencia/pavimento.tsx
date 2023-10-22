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
      <h3 className="text-primary">Dimensionamento de saídas de emergencia</h3>
      <div>
        <button className='btn btn-primary' onClick={() => setModalShow(true)}>Dimensionar rota de fuga</button>
      </div>
      <ModalCenter header='Dimensione a rota de fuga' show={modalShow} onHide={() => setModalShow(false)} size='xl'>
        <div className="d-flex flex-column gap-2">
          <div className="d-flex align-items-center gap-2">
            <label className="fw-bold text-nowrap">Rota de fuga: </label>
            <input
              type="text"
              onChange={({ target }) => setNomePavimento(target.value)}
              value={nomePavimento}
              className="form-control"
            />
            <button className="btn btn-primary ms-auto" onClick={() => {
              pavimentoAdd();
              setNomePavimento('')
            }}>
              Adicionar{' '}
            </button>
          </div>
          <div>
          </div>
        </div>
        {pavimento.map((item) => {
          return (
            <CalculoSaidas
              key={item.idPavimento}
              pavimento={item.pavimento}
              onDelete={() => pavimentoDelete(item.idPavimento)}
            />
          );
        })}
      </ModalCenter>
    </div>
  );
};

export default Pavimento;
