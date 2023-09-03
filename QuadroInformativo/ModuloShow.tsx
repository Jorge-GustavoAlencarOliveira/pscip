import React from 'react';
import { modulosProps } from './QuadroReducer';
import Modulo from './Modulo';
import { Table } from 'react-bootstrap';
import { ocupacaoModulosProps } from './QuadroReducer';
import ShowOcupacao from '../Ocupacao/showOcupacao';

interface moduloShowProps {
  ocupacao: ocupacaoModulosProps[];
  modulos: modulosProps[];
  onDelete: (id: number) => void;
  referencia: (id: number, referencia: string) => void;
  Delete: (id: number) => void;
}

const ModuloShow = ({
  modulos,
  onDelete,
  referencia,
  ocupacao,
  Delete,
}: moduloShowProps) => {
  return (
    <>
      <Table striped bordered hover className="table-primary">
        <thead>
          <tr>
            <td className="text-center bg-secondary" colSpan={5}>
              LEGISLAÇÃO
            </td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{width: '20%'}}>Norma adotada para definição de medidas</td>
            <td colSpan={4}>Decreto nº 47.998/2020</td>
          </tr>
          <tr>
            <td>Tabela</td>
            <td colSpan={4}>Tabela 15 da IT 01 8ª Edição</td>
          </tr>
          <tr>
            <td>Situação da Edificação</td>
            <td colSpan={4}>Nova</td>
          </tr>
        </tbody>
        <thead>
          <tr className="text-center">
            <td className="bg-secondary">MEDIDAS DE SEGURANÇA</td>
            <td className="bg-secondary" colSpan={4}>
              REFERÊNCIAS NORMATIVAS E OBSERVAÇÕES
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
            <td className="text-center bg-secondary" colSpan={5}>
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
          </tr>
          {ocupacao?.map((item, index) => {
            return (
              <ShowOcupacao
                key={index}
                modulo={item.ocupacao}
                onDelete={Delete}
              />
            );
          })}
        </tbody>
      </Table>
    </>
  );
};

export default ModuloShow;
