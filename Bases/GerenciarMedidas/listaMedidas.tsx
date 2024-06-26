import React from 'react';
import MedidaItem from './medidaItem';
import { useGerenciamentoMedidas } from './usegerenciamentoMedidas';
import { Table } from 'react-bootstrap';
import { TabelasQuadro } from '../../QuadroInformativo/MedidasTabela';
import { useContextProjeto } from '../../projeto/Context/contextProjeto';
import ButtonNext from '../../projeto/Navbar/buttonNext';
import { ButtonUpdate } from '../../Components/UI/buttonUpdate';
import { updateMedidasdeSeguranca } from '../../actions/actions';

type listaMedidasProps = {
  medidas: string[];
  onshow: () => void;
};

const ListaMedidas = ({ medidas, onshow }: listaMedidasProps) => {
  const { addAllDataBuilding, project_id, action, allDataBuilding } =
    useContextProjeto();
  const initialMedidas = !!allDataBuilding.medidasSeguranca.length
  ? allDataBuilding.medidasSeguranca
  : medidas;
  console.log(initialMedidas);
  const { handleAddMedida, handleDeleteMedida, modulos, handleUpdate } =
    useGerenciamentoMedidas(initialMedidas);
  const [select, setSelect] = React.useState(0);
  const { medidas: listaMedidas } = TabelasQuadro();
  const [medidasSelecionaveis, setMedidasSelecionaveis] = React.useState([]);

  console.log(modulos);
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
          {modulos?.map((item) => {
            return (
              <tr key={item}>
                  <MedidaItem
                    name={item}
                    onDelete={() => handleDeleteMedida(item)}
                  />
              </tr>
            );
          })}
        </tbody>
      </Table>
      <div className='mt-4'>
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
      <div className="mt-4">
        {action === 'true' ? (
          <ButtonUpdate
            handleClick={() => {
              updateMedidasdeSeguranca(project_id, modulos);
              addAllDataBuilding('medidasSeguranca', modulos);
            }}
          >
            Salvar alterações
          </ButtonUpdate>
        ) : (
          <ButtonNext
            onclick={() => {
              onshow();
              addAllDataBuilding('medidasSeguranca', modulos);
              updateMedidasdeSeguranca(project_id, modulos);
            }}
          />
        )}
      </div>
    </div>
  );
};

export default ListaMedidas;
