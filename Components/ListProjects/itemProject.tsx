import { setupAPIClient } from '@/services/api';
import { useRouter } from 'next/router';
import React from 'react'
import {FaEye, FaTrash, FaEdit} from 'react-icons/fa'
import { toast } from 'react-toastify';

interface ProjectProps {
  name: string;
  id: string
}

const ItemProject = ({name, id}: ProjectProps) => {
  const router = useRouter()
  function handleDetailsProject (){
    router.push(`/detailsproject/${id}`)
  }
  function handleEditProject(){
    router.push(`/editproject/${id}`)
  }
  async function handleDeleteProject(idProject: string){
      try{
        const api = setupAPIClient()
        if (typeof id === 'string'){
          await api.delete('/project', {
            params:{
              id: idProject
            }
          })
          toast.success('Projeto deletado com sucesso')
          router.reload()
        }
      }catch(err){
        console.log(err)
      }
  }

  return (
    <div className='bg-primary d-flex justify-content-between align-items-center mt-2 py-2 ps-3 rounded-4'>
        <span className='fw-bold text-light'>{name}</span>
        <ul style={{listStyle: 'none'}} className='d-flex align-items-center my-0'>
          <li onClick={handleDetailsProject} className='btn text-dark'><FaEye size={20}/></li>
          <li onClick={handleEditProject}className='btn text-light'><FaEdit size={20}/></li>
          <li onClick={() => handleDeleteProject(id)} className='btn text-danger'><FaTrash size={20}/></li>              
        </ul>
    </div>
  )
}

export default ItemProject
