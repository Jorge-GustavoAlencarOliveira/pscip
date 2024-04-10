import React from 'react';
import {
  useGerenciamento,
} from '../../Components/Hooks/useGerenciamento';
import { FormSelect, FormControl } from 'react-bootstrap';
import { useContextProjeto } from '../Context/contextProjeto';
import ModalCenter from '../../Components/Modal/Modal';
import { updateGerenciamento } from '../../actions/actions';
import { toast } from 'react-toastify';
import { FaEdit, FaTrash } from 'react-icons/fa';

interface pageProps {
  isActive: boolean;
}

const GerenciamentoProjeto = ({ isActive }: pageProps) => {
  const { addAllDataBuilding, allDataBuilding, action, project_id } =
    useContextProjeto();

  const {
    statusList,
    setStatusSelected,
    statusSelected,
    observation,
    setObservation,
    listObservation,
    handleAddObservation,
    handleDeleteObservation,
    handleEditObservation,
    schemaObservation,
  } = useGerenciamento(allDataBuilding.gerenciamento);
  const [showModal, setShowModal] = React.useState(false);
  const [isEditing, setIsEditing] = React.useState(false);
  const [idEdited, setIdEdited] = React.useState<number | null>(null)

  function addObservationDb() {
    const observationValidated = schemaObservation.safeParse(observation);
    if (!observationValidated.success)
      return toast.error('Insira uma observação válida');
    handleAddObservation(observationValidated.data);
    setObservation('');
  }

  console.log(listObservation);

  function deleteObservation(id: number) {
    handleDeleteObservation(id);
  }

  function updateObservation(id: number, content: string) {
    const observationValidated = schemaObservation.safeParse(content);
    if (!observationValidated.success)
      return toast.error('Insira uma observação válida');
    handleEditObservation(id, observationValidated.data);
    setObservation('')
    setIsEditing(false)
    setIdEdited(null)
  }

  React.useEffect(() => {
    addAllDataBuilding('gerenciamento', {
      status: statusSelected,
      observacoes: listObservation,
    });
    updateGerenciamento(project_id, {
      status: statusSelected,
      observacoes: listObservation,
    });
  }, [statusSelected, listObservation]);

  if (isActive)
    return (
      <div>
        <div className="mb-4">
          <h3 className="text-primary">Gerenciamento de Projeto</h3>
          <span>Gerencie as informações do seu projeto.</span>
        </div>
        <div className="d-flex align-items-center gap-2 mb-3 border-bottom border-secondary  pb-3">
          <span className="fw-bold">Status do Projeto:</span>
          <span>{statusList[statusSelected]}</span>
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
            <div className="d-flex align-items-center gap-2">
              <span className="fw-bold mb-2 d-block">Status:</span>
              <FormSelect
                onChange={({ target }) => setStatusSelected(+target.value)}
                value={statusSelected}
                className="w-100"
              >
                {statusList.map((item, index) => {
                  return (
                    <option key={item} value={index}>
                      {item}
                    </option>
                  );
                })}
              </FormSelect>
            </div>
            <div className="d-flex justify-content-end gap-2 mt-4">
              <button
                className="btn btn-primary"
                onClick={() => setShowModal(false)}
              >
                Fechar
              </button>
            </div>
          </ModalCenter>
        </div>
        <div className="d-flex flex-column gap-2 mb-4">
          <label className="d-block mb-2 fw-bold">Observações:</label>
          <FormControl
            as="textarea"
            style={{ height: '150px' }}
            value={observation}
            onChange={({ target }) => setObservation(target.value)}
          />
          <div>
            {isEditing ? (
              <button
                onClick={() => updateObservation(idEdited, observation)} 
                className="btn btn-primary float-end">Editar</button>
            ) : (
              <button
                onClick={addObservationDb}
                className="btn btn-primary float-end"
              >
                Adicionar
              </button>
            )}
          </div>
        </div>
        <div>
          {listObservation.map((item) => {
            return (
              <li
                key={item.id}
                className="d-flex justify-content-between align-items-center px-2 py-3 border-bottom"
              >
                {item.content}
                <div>
                  <button
                    className="btn"
                    onClick={() => {
                      setObservation(item.content), setIsEditing(true), setIdEdited(item.id);
                    }}
                  >
                    <FaEdit size={16} />
                  </button>
                  <button
                    className="btn"
                    onClick={() => deleteObservation(item.id)}
                  >
                    <FaTrash />
                  </button>
                </div>
              </li>
            );
          })}
        </div>
      </div>
    );
  return null;
};

export default GerenciamentoProjeto;
