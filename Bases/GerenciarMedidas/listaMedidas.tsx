import React from 'react';
import MedidaItem from './medidaItem';
import { useGerenciamentoMedidas } from './usegerenciamentoMedidas';
import { Table } from 'react-bootstrap';
import { TabelasQuadro } from '../../QuadroInformativo/MedidasTabela';
import { useContextProjeto } from '../../projeto/Context/contextProjeto';
import { setupAPIClient } from '@/services/api';
import ButtonNext from '../../projeto/Navbar/buttonNext';
import { ButtonUpdate } from '../../Components/UI/buttonUpdate';

type listaMedidasProps = {
  medidas: string[];
  onshow: () => void;
};

const ListaMedidas = ({ medidas, onshow }: listaMedidasProps) => {
  const { addAllDataBuilding, project_id, action, allDataBuilding } =
    useContextProjeto();
  const initialMedidas = !!allDataBuilding.medidasSeguranca.length ? allDataBuilding.medidasSeguranca : medidas;
  const { handleAddMedida, handleDeleteMedida, modulos, handleUpdate } =
    useGerenciamentoMedidas(initialMedidas);
  const [select, setSelect] = React.useState(0);
  const { medidas: listaMedidas } = TabelasQuadro();
  const [medidasSelecionaveis, setMedidasSelecionaveis] = React.useState([]);

  async function updateMedidasdeSeguranca() {
    try {
      const api = setupAPIClient();
      const newMedidas = await api.put('/project/medidasseguranca', {
        id: project_id,
        medidasSeguranca: modulos,
      });
      // handleUpdate(newMedidas.data.medidasSeguranca);
      // console.log(modulos);
    } catch (err) {
      console.log(err);
    }
  }

  React.useEffect(() => {
    setMedidasSelecionaveis([]);
    listaMedidas.map((item) => {
      if (!modulos.includes(item[0]))
        setMedidasSelecionaveis((items) => [...items, item[0]]);
    });
    addAllDataBuilding('medidasSeguranca', modulos);
  }, [modulos]);

  return (
    <div className="mb-4">
      <Table striped>
        <thead>
          <tr className="text-center table-primary">
            <th>Medidas de Segurança</th>
          </tr>
        </thead>
        <tbody>
          {modulos.map((item) => {
            return (
              <tr>
                <MedidaItem
                  key={item}
                  name={item}
                  onDelete={() => handleDeleteMedida(item)}
                />
              </tr>
            );
          })}
        </tbody>
      </Table>
      <div>
        <span className="fw-bold">
          Deseja adicionar alguma medida de segurança?{' '}
        </span>
        <div className="d-flex gap-4 mt-3">
          <select
            className="form-select"
            onChange={({ target }) => setSelect(+target.value)}
          >
            {medidasSelecionaveis.map((item, index) => {
              return (
                <option key={index} value={index}>
                  {item}
                </option>
              );
            })}
          </select>
          <button
            className="btn btn-secondary"
            onClick={() => handleAddMedida(medidasSelecionaveis[select])}
          >
            Adicionar
          </button>
        </div>
      </div>
      <div className='mt-4'>
        {action === 'true' ? (
          <ButtonUpdate handleClick={() => {
            updateMedidasdeSeguranca()
            addAllDataBuilding('medidasSeguranca', modulos)
            }}>
            Salvar alterações
          </ButtonUpdate>
        ) : (
          <ButtonNext
            onclick={() => {
              onshow();
              addAllDataBuilding('medidasSeguranca', modulos)
              updateMedidasdeSeguranca();
            }}
          />
        )}
      </div>
    </div>
  );
};

export default ListaMedidas;
