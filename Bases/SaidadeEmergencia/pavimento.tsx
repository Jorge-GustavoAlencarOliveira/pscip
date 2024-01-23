import React from 'react';
import { pavimentoReducer } from './ModuloReducer';
import { toast } from 'react-toastify';
import CalculoSaidas from './Saidas';
import ModalCenter from '../../Components/Modal/Modal';
import { moduloProps } from './ModuloReducer';
import ModuloShow from './ModuloShow';
let idPavimento = 1;

const Pavimento = ({ calculadora }: { calculadora?: boolean }) => {
  const [pavimento, dispatchPavimento] = React.useReducer(pavimentoReducer, []);
  const [nomePavimento, setNomePavimento] = React.useState('');
  const [modalShow, setModalShow] = React.useState(false);
  const [modalRotaShow, setModalRotaShow] = React.useState(false);

  function pavimentoAdd(modulo: moduloProps[]) {
    if (nomePavimento === '') return toast.info('Dê um nome ao pavimento');
    dispatchPavimento({
      type: 'add',
      idPavimento: idPavimento++,
      pavimento: nomePavimento,
      dados: modulo,
    });
    setModalShow(false);
  }

  function resetNomePavimento() {
    setNomePavimento('');
  }

  function pavimentoNome(value: string) {
    setNomePavimento(value);
  }

  function pavimentoDelete(id: number) {
    dispatchPavimento({
      type: 'delete',
      idPavimento: id,
    });
  }

  return (
    <div className="d-flex flex-column gap-2">
      {calculadora ? (
        <CalculoSaidas
          nomePavimento={nomePavimento}
          pavimento={pavimentoNome}
          pavimentoAdd={pavimentoAdd}
          resetNomePavimento={resetNomePavimento}
        />
      ) : (
        <div>
          <div className="d-flex justify-content-between align-items-center mb-4">
            <h5 className="text-primary">
              Dimensionamento de saídas de emergencia
            </h5>
            <div>
              <button
                className="btn btn-primary float-end"
                onClick={() => setModalShow(true)}
              >
                Dimensionar rota de fuga
              </button>
            </div>
          </div>
          <ModalCenter
            header="Dimensione a rota de fuga"
            show={modalShow}
            onHide={() => setModalShow(false)}
            size="xl"
          >
            <CalculoSaidas
              nomePavimento={nomePavimento}
              pavimento={pavimentoNome}
              pavimentoAdd={pavimentoAdd}
              resetNomePavimento={resetNomePavimento}
            />
          </ModalCenter>
        </div>
      )}
      {pavimento.length > 0 &&
        pavimento.map((item) => {
          return (
            <div key={item.idPavimento} className="d-flex">
              <div className="flex-grow-1">
                <h5 className="btn" onClick={() => setModalRotaShow(true)}>
                  {item.pavimento}
                </h5>
                <ModalCenter
                  header={item.pavimento}
                  show={modalRotaShow}
                  onHide={() => setModalRotaShow(false)}
                  size="xl"
                >
                  <ModuloShow modulos={item.dados} />
                </ModalCenter>
              </div>
              <div className="ms-2">
                <button
                  onClick={() => pavimentoDelete(item.idPavimento)}
                  className="btn btn-primary my-auto"
                >
                  Excluir
                </button>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default Pavimento;
