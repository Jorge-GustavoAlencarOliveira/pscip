import { setupAPIClient } from '@/services/api';
import React from 'react';
import { toast } from 'react-toastify';
import Dropdown from 'react-bootstrap/Dropdown';
import ButtonDropdown, { useItemProject } from './useItemProject';
import { informacoesProps } from '../Hooks/useDados';

interface ProjectProps {
  id: string;
  created_at: string;
  dados: informacoesProps;
  uptadeList: () => void;
}

const ItemProject = ({ id, uptadeList, dados, created_at }: ProjectProps) => {
  const { handleDetailsProject, handleEditProject } = useItemProject();
  console.log(created_at);
  async function handleDeleteProject(idProject: string) {
    try {
      const api = setupAPIClient();
      if (typeof id === 'string') {
        await api.delete('/project', {
          params: {
            id: idProject,
          },
        });
        toast.success('Projeto deletado com sucesso');
        uptadeList();
      }
    } catch (err) {
      console.log(err);
    }
  }

  const listMonths = {
    '01': 'Jan',
    '02': 'Fev',
    '03': 'Mar',
    '04': 'Abr',
    '05': 'Maio',
    '06': 'Jun',
    '07': 'Jul',
    '08': 'Ago',
    '09': 'Set',
    '10': 'Out',
    '11': 'Nov',
    '12': 'Dez',
  };

  function dateTreament(value: string) {
    const newDate = value.split('-');
    const day = newDate[2].substring(0, 2);
    return `${day}, ${listMonths[newDate[1]]}/${newDate[0]}`;
  }

  return (
    <tr className="position-static">
      <td
        onClick={() => handleDetailsProject(id)}
        className="fw-bold text-primary hover"
        style={{ width: '50%' }}
      >
        <button className="btn p-0 text-primary">{dados?.projeto}</button>
      </td>
      <td className="text-center" style={{ width: '20%' }}>
        <span>{dateTreament(created_at)}</span>
      </td>
      <td className="text-center" style={{ width: '25%' }}>
        <span>Aprovado em análise</span>
      </td>
      <td style={{ width: '5%' }}>
        <Dropdown drop="start">
          <Dropdown.Toggle
            as={ButtonDropdown}
            id="dropdown-custom-components"
          />
          <Dropdown.Menu>
            <Dropdown.Item onClick={() => handleEditProject(id)}>
              Editar
            </Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item
              className="text-danger"
              onClick={() => handleDeleteProject(id)}
            >
              Deletar
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </td>
    </tr>
  );
};

export default ItemProject;
