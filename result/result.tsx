import React from 'react';
import { DataStorage } from '../dataContext';
import TabelaDescricao from '../Tabelas/tabelaDescricao';
import { listaOcupacao } from '../Ocupacoes/ListaOcupacoes';
import ShowMedidas from './showMedidas';
import { setupAPIClient } from '@/services/api';
import { toast } from 'react-toastify';
import { useRouter } from 'next/router';
const Result = () => {
  const { descricao } = TabelaDescricao();
  const { valoresOcupacao, informations } = React.useContext(DataStorage);
  const [medidas1, setMedidas] = React.useState<string[][]>([]);
  const router = useRouter()
  async function handleCreateProject() {
    try{
      const api = setupAPIClient()
      await api.post('https://backend-pscip.vercel.app/project', {
        name: informations.projeto,
        dados: informations,
        edificacao: valoresOcupacao
      })
      toast.success('Projeto salvo com sucesso')
      router.push('/meusprojetos')
    }catch(err){
       console.log(err)
       toast.error('Erro ao criar projeto')
    }
  }

  React.useEffect(() => {
    valoresOcupacao.map((item) => {
      if (item[0].compartimentacao === 'compartimentacaoNao') {
        item[1].map((item1) => {
          const valor = descricao[item1[0]][item1[1]][item1[2]].divisao;
          const medidas =
            valor in listaOcupacao &&
            typeof item[0].altura === 'string' &&
            item[0].areaTotal &&
            typeof item[0].dataConstrucao === 'string' &&
            listaOcupacao[valor](
              item[0].altura,
              item[0].areaTotal.toString(),
              descricao[item1[0]][item1[1]][item1[2]].cargaincendio,
              valoresOcupacao.length,
              item[0].dataConstrucao,
            );
          if (medidas) {
            setMedidas((item) => [...item, medidas]);
          }
        });
      }
    });
  }, []);
  let medidasFinal: string[] = [];
  medidas1.map((item) => {
    item.map((item1) => {
      medidasFinal.push(item1);
    });
  });
  const final = [...new Set(medidasFinal)];
  return (
    <>
      {valoresOcupacao.map((item, index) => {
        return (
          <div key={index}>
            {valoresOcupacao.length > 1 && <h1>Risco {index + 1}</h1>}
            {item[1].map((item1, index1) => {
              const valor = descricao[item1[0]][item1[1]][item1[2]].divisao;
              const medidas =
                valor in listaOcupacao &&
                typeof item[0].altura === 'string' &&
                item[0].areaTotal &&
                typeof item[0].dataConstrucao === 'string' &&
                listaOcupacao[valor](
                  item[0].altura,
                  item[0].areaTotal.toString(),
                  descricao[item1[0]][item1[1]][item1[2]].cargaincendio,
                  valoresOcupacao.length,
                  item[0].dataConstrucao,
                );
              if (item[0].compartimentacao === 'compartimentacaoSim') {
                return (
                  <div key={index1}>
                    <p>Divisão: {valor}</p>
                    <p>
                      Descrição:{' '}
                      {descricao[item1[0]][item1[1]][item1[2]].descricao}
                    </p>
                    <p>
                      Carga incêndio:{' '}
                      {item1[3] ||
                        descricao[item1[0]][item1[1]][item1[2]]
                          .cargaincendio}{' '}
                      MJ/m²
                    </p>
                    <div>
                      {medidas && (
                        <ShowMedidas
                          medidas={medidas}
                          dados={item[0]}
                          ocupacao={valor}
                        />
                      )}
                    </div>
                  </div>
                );
              } else {
                return (
                  <div key={index1}>
                    <p>Divisão: {valor}</p>
                    <p>
                      Descrição:{' '}
                      {descricao[item1[0]][item1[1]][item1[2]].descricao}
                    </p>
                    <p>
                      Carga incêndio:{' '}
                      {item1[3] ||
                        descricao[item1[0]][item1[1]][item1[2]]
                          .cargaincendio}{' '}
                      MJ/m²
                    </p>
                  </div>
                );
              }
            })}
            <div>
              {final.length !== 0 && (
                <ShowMedidas medidas={final} dados={item[0]} ocupacoes={item[1]} />
              )}
            </div>
            <br />
            <p>Área construída: {item[0].areaConstruida} m²</p>
            <p>Área a construir: {item[0].areaAconstruir} m²</p>
            <p>Área total: {item[0].areaTotal} m²</p>
            <p>Altura: {item[0].altura} m</p>
            <p>Pavimentos: {item[0].pavimentos}</p>
            <p>Situação: {item[0].dataConstrucao}</p>
            <div>
              <button onClick={handleCreateProject} className='btn btn-primary float-end'>Salvar Projeto</button>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Result;
