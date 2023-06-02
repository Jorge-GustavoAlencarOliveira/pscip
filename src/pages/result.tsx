import React from 'react';
import A1 from '../../Ocupacoes/A2';
import { DataStorage } from '../../dataContext';
import TabelaDescricao from '../../Tabelas/tabelaDescricao';

const Result = () => {
  const { descricao } = TabelaDescricao();
  const { valoresOcupacao } = React.useContext(DataStorage);
  const listaOcupacao = {
    'A-2': (alt:string, area:string, carga:number, isolamento: number) => <A1 altura={alt} area={area} cargaIncendio={carga} isolamento={isolamento}/>,
    
    'B_2': (alt:string, area:string, carga:number, isolamento: number) => <A1 altura={alt} area={area} cargaIncendio={carga} isolamento={isolamento}/>,
   
  };
  
  return (
    <>
      <div>
        {valoresOcupacao.map((item, index) => {
          return(
            <ul key={index}>
              <h1>Risco {index + 1}</h1>
              {item[1].map((item1, index1) =>{
                return(
                  <div key={index1}>
                    <p>Divisão: {descricao[item1[0]][item1[1]][item1[2]].divisao}</p>
                    <p>Descrição: {descricao[item1[0]][item1[1]][item1[2]].descricao}</p>
                    <p>Carga incêndio: {descricao[item1[0]][item1[1]][item1[2]].cargaincendio} MJ/m²</p>                    
                    {listaOcupacao[descricao[item1[0]][item1[1]][item1[2]].divisao](item[0].altura, item[0].areaTotal, descricao[item1[0]][item1[1]][item1[2]].cargaincendio, valoresOcupacao.length)}                  
                  </div>
                )
              })}
              <br/>

              <li>Área construída: {item[0].areaConstruida} m²</li>
              <li>Área a construir: {item[0].areaAconstruir}</li>
              <li>Área total: {item[0].areaTotal} m²</li>
              <li>Altura: {item[0].altura} m</li>
              <li>Pavimentos: {item[0].pavimentos}</li>
              <div>
              </div>
            </ul>
          )
        })}
      </div>

    </>
  );
};

export default Result;
