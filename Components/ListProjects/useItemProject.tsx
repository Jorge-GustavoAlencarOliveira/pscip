import React from 'react'
import {useRouter} from 'next/router';
import { FaEllipsisH } from 'react-icons/fa';
import { LegacyRef } from 'react';

export const useItemProject = () => {
  const router = useRouter()
  function handleDetailsProject(id: string) {
    router.push(`/projeto/${id}?edit=true`);
  }
  function handleEditProject(id: string) {
    router.push(`/editproject/${id}`);
  }
 
  return {handleDetailsProject, handleEditProject}
}

const ButtonDropdown =  React.forwardRef(({onClick }:{onClick: (e: any) => void}, ref: LegacyRef<HTMLSpanElement>) => (
  <span
    ref={ref}
    onClick={(e) => {
      e.preventDefault();
      onClick(e);
    }}
    style={{cursor: 'pointer'}}
  >
    <FaEllipsisH />
  </span>
));

export default ButtonDropdown