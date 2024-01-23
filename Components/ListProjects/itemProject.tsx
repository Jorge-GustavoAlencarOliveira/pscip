import { setupAPIClient } from '@/services/api';
import React from 'react';
import { toast } from 'react-toastify';
import Dropdown from 'react-bootstrap/Dropdown';
import ButtonDropdown, { useItemProject } from './useItemProject';

interface ProjectProps {
  name: string;
  id: string;
  uptadeList: () => void;
}

const ItemProject = ({ name, id, uptadeList }: ProjectProps) => {
  const {handleDetailsProject, handleEditProject} = useItemProject()

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

  
  return (
    <tr className="position-static">
      <td
        onClick={() => handleDetailsProject(id)}
        className="fw-bold text-primary hover"
        style={{ width: '50%' }}
      >
        <button className="btn p-0 text-primary">{name}</button>
      </td>
      <td className="text-center" style={{ width: '20%' }}>
        <span>09 Dez, 2023</span>
      </td>
      <td className="text-center" style={{ width: '25%' }}>
        <span>Aprovado em análise</span>
      </td>
      <td style={{ width: '5%' }}>
        <Dropdown drop='start'>
          <Dropdown.Toggle as={ButtonDropdown} id="dropdown-custom-components"/> 
          <Dropdown.Menu>
            <Dropdown.Item onClick={() => handleEditProject(id)}>Editar</Dropdown.Item>
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
