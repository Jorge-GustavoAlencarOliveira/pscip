import React from 'react';
import Modulo from './Modulo';
import { Table } from 'react-bootstrap';
import ShowOcupacao from '../Ocupacao/showOcupacao';
import { FaPlus } from 'react-icons/fa';
import { TabelasQuadro } from './MedidasTabela';
import { QuadroInformativoContext } from './useContext';

interface moduloShowProps {
  showModal: () => void;
  showModal1: () => void;
}

const ModuloShow = ({showModal, showModal1}:moduloShowProps) => {
  const {normas, tabelas, dataconstrucao} = TabelasQuadro()
  const {norma, selecionarNorma, modulos, ocupacao, handleDeleteOcupacao, tabela, selecionarTabela, construcao, selecionarConstrucao} = React.useContext(QuadroInformativoContext)

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
            <td colSpan={5}>
              <select value={norma} onChange={({target}) => selecionarNorma(+target.value)}>
                 {normas.map((item, index) => 
                  <option key={index} value={index}>
                     {item}
                  </option>
                 )}
              </select>
            </td>
          </tr>
          <tr>
            <td>Tabela</td>
            <td colSpan={5}>
              <select value={tabela} onChange={({target}) => selecionarTabela(+target.value)}>
                {tabelas.map((item, index) => 
                  <option key={index} value={index}>
                    {item}
                  </option>
                )}
              </select>
            </td>
          </tr>
          <tr>
            <td>Situação da Edificação</td>
            <td colSpan={5}><select value={construcao} onChange={({target}) => selecionarConstrucao(+target.value)}>
                {dataconstrucao.map((item, index) => 
                  <option key={index} value={index}>
                    {item}
                  </option>
                )}
              </select></td>
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
                onDelete={() => handleDeleteOcupacao(item.id)}
              />
            );
          })}
        </tbody>
      </Table>
    </>
  );
};

export default ModuloShow;
