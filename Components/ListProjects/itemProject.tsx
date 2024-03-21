import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import ButtonDropdown, { useItemProject } from './useItemProject';
import { informacoesProps } from '../Hooks/useDados';
import { setupAPIClient } from '@/services/api';
import { toast } from 'react-toastify';
import { useRouter } from 'next/router';
interface ProjectProps {
  id: string;
  created_at: string;
  dados: informacoesProps;
}

const ItemProject = ({ id, dados, created_at }: ProjectProps) => {
  const { handleDetailsProject, handleEditProject } = useItemProject();
  const router = useRouter()
  async function deleteProject() {
    try {
      const api = setupAPIClient()
      await api.delete('/project', {
        params: {
          id: id,
        },
      });
      toast.success('Projeto deletado com sucesso')
      router.reload();
    } catch (err) {
      console.log(err);
      return toast.error('Não foi possível apagar o projeto');
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
              onClick={deleteProject}
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
