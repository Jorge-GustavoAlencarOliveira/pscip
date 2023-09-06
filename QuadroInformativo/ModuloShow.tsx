import React from 'react';
import { modulosProps } from './QuadroReducer';
import Modulo from './Modulo';
import { Table } from 'react-bootstrap';
import { ocupacaoModulosProps } from './QuadroReducer';
import ShowOcupacao from '../Ocupacao/showOcupacao';
import { FaPlus } from 'react-icons/fa';
interface moduloShowProps {
  ocupacao: ocupacaoModulosProps[];
  modulos: modulosProps[];
  onDelete: (id: number) => void;
  referencia: (id: number, referencia: string) => void;
  Delete: (id: number) => void;
  showModal: () => void;
  showModal1: () => void;
}

const ModuloShow = ({
  modulos,
  onDelete,
  referencia,
  ocupacao,
  Delete,
  showModal,
  showModal1,
}: moduloShowProps) => {
  return (
    <>
      <Table bordered className="table-primary">
        <thead>
          <tr>
            <td className="text-center bg-secondary" colSpan={6}>
              LEGISLAÇÃO
            </td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{ width: '20%' }}>
              Norma adotada para definição de medidas
            </td>
            <td colSpan={5}>Decreto nº 47.998/2020</td>
          </tr>
          <tr>
            <td>Tabela</td>
            <td colSpan={5}>Tabela 15 da IT 01 8ª Edição</td>
          </tr>
          <tr>
            <td>Situação da Edificação</td>
            <td colSpan={5}>Nova</td>
          </tr>
        </tbody>
        <thead>
          <tr className="text-center">
            <td className="bg-secondary">MEDIDAS DE SEGURANÇA</td>
            <td className="bg-secondary" colSpan={4}>
              REFERÊNCIAS NORMATIVAS E OBSERVAÇÕES
            </td>
            <td className="bg-primary">
              <button onClick={showModal} className="btn btn-primary">
                <FaPlus size={20} />
              </button>
            </td>
          </tr>
        </thead>
        <tbody>
          {modulos?.map((item) => {
            return (
              <Modulo
                key={item.id}
                modulo={item}
                onDelete={onDelete}
                referencia={referencia}
              />
            );
          })}
        </tbody>
        <thead>
          <tr>
            <td className="text-center bg-secondary" colSpan={6}>
              CLASSIFICAÇÃO DE OCUPAÇÃO E CARGA INCÊNDIO
            </td>
          </tr>
        </thead>
        <tbody>
          <tr className="text-center">
            <td>GRUPO</td>
            <td>OCUPAÇÃO</td>
            <td>DIVISÃO</td>
            <td>DESCRIÇÃO</td>
            <td>CARGA DE INCÊNDIO EM MJ/m²</td>
            <td className="bg-primary">
              <button onClick={showModal1} className="btn btn-primary">
                <FaPlus size={20} />
              </button>
            </td>
          </tr>
          {ocupacao?.map((item, index) => {
            return (
              <ShowOcupacao
                key={index}
                modulo={item.ocupacao}
                onDelete={() => Delete(item.id)}
              />
            );
          })}
        </tbody>
      </Table>
    </>
  );
};

export default ModuloShow;
