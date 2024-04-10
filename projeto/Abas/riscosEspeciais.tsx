import React from 'react';
import Form from 'react-bootstrap/Form';
import CheckBoxRiscoEspeciais from '../../Bases/RiscosEspeciais/CheckBoxComponent';
import { listaRiscosEspeciais } from '../../Bases/RiscosEspeciais/listaRiscosEspeciais';
import ButtonNext from '../Navbar/buttonNext';
import { useRiscosEspeciais } from '../../Bases/RiscosEspeciais/useRiscosEspeciais';
import { useContextProjeto } from '../Context/contextProjeto';
import { setupAPIClient } from '@/services/api';
import { ButtonUpdate } from '../../Components/UI/buttonUpdate';
import { updateRiscosEspeciais } from '../../actions/actions';

interface pageProps {
  isActive: boolean;
  onshow: (index: number) => void;
}

const RiscosEspeciais = ({ isActive, onshow }: pageProps) => {
  const { addAllDataBuilding, allDataBuilding, project_id, action } =
    useContextProjeto();
  const {
    handleChange,
    listChecked,
    existemRiscosEspeciais,
    handleChangeExisteRisco,
  } = useRiscosEspeciais(allDataBuilding.riscosEspeciais);

  if (isActive) {
    return (
      <>
        <div className="mb-4">
          <h4 className="text-primary">Riscos especiais</h4>
          <Form.Check
            type="switch"
            id="custom-switch"
            label="Existem riscos especiais na edificação."
            onChange={handleChangeExisteRisco}
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
            {action === 'true' ? (
              <ButtonUpdate handleClick={() => updateRiscosEspeciais(project_id, listChecked)}>Salvar alterações</ButtonUpdate>
            ) : (
              <ButtonNext
                onclick={() => {
                  onshow(3);
                  addAllDataBuilding('riscosEspeciais', listChecked);
                  updateRiscosEspeciais(project_id, listChecked);
                }}
              />
            )}
          </div>
        </div>
      </>
    );
  }
  return null;
};

export default RiscosEspeciais;
