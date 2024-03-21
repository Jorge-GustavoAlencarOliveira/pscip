import React from 'react';
import MedidaItem from './medidaItem';
import { useGerenciamentoMedidas } from './usegerenciamentoMedidas';
import { Table } from 'react-bootstrap';
import { TabelasQuadro } from '../../QuadroInformativo/MedidasTabela';
import { useContextProjeto } from '../../projeto/Context/contextProjeto';
import { setupAPIClient } from '@/services/api';

type listaMedidasProps = {
  medidas: string[];
};

const ListaMedidas = ({ medidas }: listaMedidasProps) => {
  
  const { handleAddMedida, handleDeleteMedida, modulos } =
    useGerenciamentoMedidas(medidas);
  const [select, setSelect] = React.useState(0);
  const { medidas: listaMedidas } = TabelasQuadro();
  const [medidasSelecionaveis, setMedidasSelecionaveis] = React.useState([])
  const {addAllDataBuilding, medidasSeguranca, project_id} = useContextProjeto()
  
  async function updateMedidasdeSeguranca(medidas: string[]) {
    console.log(medidas);
    try{
      const api = setupAPIClient()
      const project = await api.put('/project/medidasseguranca', {
        id: project_id,
        medidasSeguranca: medidas
      })
      console.log(project);  
    }catch(err){
      console.log(err);
    }
  }
 
  React.useEffect(() => {
    setMedidasSelecionaveis([])
    listaMedidas.map(item => {
      if(!modulos.includes(item[0])) setMedidasSelecionaveis(items => [...items, item[0]])
    })
    addAllDataBuilding('medidasSeguranca', modulos)
    updateMedidasdeSeguranca(modulos)
  },[modulos])
   
 

  return (
    <div className='mb-4'>
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
        <span className='fw-bold'>Deseja adicionar alguma medida de segurança? </span>
        <div className="d-flex gap-4 mt-3">
          <select
            className="form-select"
            onChange={({ target }) => setSelect(+target.value)}
          >
            {
              medidasSelecionaveis.map((item, index) => {
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
    </div>
  );
};

export default ListaMedidas;
