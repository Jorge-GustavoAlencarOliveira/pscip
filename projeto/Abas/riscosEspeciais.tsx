import React from 'react';
import Form from 'react-bootstrap/Form';
import CheckBoxRiscoEspeciais from '../../Bases/RiscosEspeciais/CheckBoxComponent';
import { listaRiscosEspeciais } from '../../Bases/RiscosEspeciais/listaRiscosEspeciais';
import ButtonNext from '../Navbar/buttonNext';
import { useRiscosEspeciais } from '../../Bases/RiscosEspeciais/useRiscosEspeciais';
import { useContextProjeto } from '../Context/contextProjeto';
import { api } from '@/services/apiClient';

interface pageProps {
  isActive: boolean;
  onshow: (index: number) => void;
}

const RiscosEspeciais = ({ isActive, onshow }: pageProps) => {

  const {addAllDataBuilding, riscosEspeciais, project_id} = useContextProjeto()
  const {
    handleChange,
    listChecked,
    existemRiscosEspeciais,
    handleChageExisteRisco,
  } = useRiscosEspeciais(riscosEspeciais);
  console.log(riscosEspeciais);

  async function updateRiscosEspeciais(list: string[]) {
    try{
      await api.put('/project/riscosespeciais', {
         id: project_id,
         riscosEspeciais: list,
      })
      console.log('requisitou');
    }catch(err){
      console.log(err);
    }
  }

  if (isActive) {
    return (
      <>
        <div className="mb-4">
          <h4 className="text-primary">Riscos especiais</h4>
          <Form.Check
            type="switch"
            id="custom-switch"
            label="Existem riscos especiais na edificação."
            onChange={handleChageExisteRisco}
            checked={!existemRiscosEspeciais}
          />
        </div>
        <div className="d-flex flex-column gap-2">
          <span
            className="fw-bold"
            style={{ opacity: existemRiscosEspeciais ? '0.5' : '1' }}
          >
            Selecione os riscos especiais existentes na edificação.
          </span>
          <Form>
            {listaRiscosEspeciais.map((item) => {
              return (
                <CheckBoxRiscoEspeciais
                  key={item}
                  name={item}
                  handleChange={handleChange}
                  disabled={existemRiscosEspeciais}
                  list={listChecked}
                />
              );
            })}
          </Form>
          <div className="mt-4">
            <ButtonNext onclick={() => {
              onshow(3)
              addAllDataBuilding('riscosEspeciais', listChecked)
              updateRiscosEspeciais(listChecked)
            }}/>
          </div>
        </div>
      </>
    );
  }
  return null;
};

export default RiscosEspeciais;
