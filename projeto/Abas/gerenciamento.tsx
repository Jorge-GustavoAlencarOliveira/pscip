import React from 'react';
import { useGerenciamento } from '../../Components/Hooks/useGerenciamento';
import { FormSelect, FormGroup, FormControl } from 'react-bootstrap';
import { useContextProjeto } from '../Context/contextProjeto';
import ModalCenter from '../../Components/Modal/Modal';
interface pageProps {
  isActive: boolean;
}

const GerenciamentoProjeto = ({ isActive }: pageProps) => {
  const { status, setStatusSelect, statusSelect, observation, setObservation } =
    useGerenciamento();
  const { addAllDataBuilding } = useContextProjeto();
  const [showModal, setShowModal] = React.useState(false);

  React.useEffect(() => {
    if (addAllDataBuilding) {
      addAllDataBuilding('status', status[statusSelect]);
      addAllDataBuilding('observacoes', observation);
    }
  }, [statusSelect, observation]);

  if (isActive)
    return (
      <div>
        <div className="mb-4">
          <h3 className="text-primary">Gerenciamento de Projeto</h3>
          <span>Gerencie as informações do seu projeto.</span>
        </div>
        <div className="d-flex align-items-center gap-2 mb-3 border-bottom border-secondary  pb-3">
          <span className="fw-bold">Status do Projeto:</span>
          <span>{status[statusSelect]}</span>
          <button
            className="btn btn-secondary ms-auto"
            onClick={() => setShowModal(true)}
          >
            Alterar status
          </button>
          <ModalCenter
            size="lg"
            header="Atualize o status do seu projeto"
            onHide={() => setShowModal(false)}
            show={showModal}
          >
            <div className='d-flex align-items-center gap-2'>
              <span className='fw-bold mb-2 d-block'>Status:</span>
              <FormSelect
                onChange={({ target }) => setStatusSelect(+target.value)}
                value={statusSelect}
                className="w-100"
              >
                {status.map((item, index) => {
                  return (
                    <option key={item} value={index}>
                      {item}
                    </option>
                  );
                })}
              </FormSelect>
            </div>
            <div className='d-flex justify-content-end gap-2 mt-4'>
              <button
                className="btn btn-success"
                onClick={() => setShowModal(false)}
              >
                Atualizar
              </button>
              <button className='btn btn-danger' onClick={() => setShowModal(false)}>Fechar</button>
            </div>
          </ModalCenter>
        </div>
        <div>
          <span className="d-block mb-2 fw-bold">Observações:</span>
          <FormControl
            as="textarea"
            style={{ height: '150px' }}
            value={observation}
            onChange={({ target }) => setObservation(target.value)}
          />
        </div>
      </div>
    );
  return null;
};

export default GerenciamentoProjeto;
