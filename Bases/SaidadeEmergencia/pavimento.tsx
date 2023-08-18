import React from 'react';
import { pavimentoReducer } from './ModuloReducer';
import { toast } from 'react-toastify';
import CalculoSaidas from './Saidas';

let idPavimento = 1;

const Pavimento = () => {
  const [pavimento, dispatchPavimento] = React.useReducer(pavimentoReducer, []);
  const [nomePavimento, setNomePavimento] = React.useState('');

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
      <h1 className='text-primary'>Dimensionamento de saídas de emergencia</h1>
        <div className='d-flex justify-content-between align-items-center gap-2'>
          <div className='d-flex align-items-center gap-2 w-50'>
            <label className='fw-bold w-auto'>Nome do pavimento: </label>
            <input
              style={{ margin: '1rem 0' }}
              type="text"
              onChange={({ target }) => setNomePavimento(target.value)}
              value={nomePavimento}
              className="form-control w-50"
            />
          </div>
          <button className='btn btn-primary' onClick={pavimentoAdd}>Adicionar pavimento </button>
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
    </div>
  );
};

export default Pavimento;
