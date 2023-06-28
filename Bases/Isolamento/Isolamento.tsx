import React from 'react';
import IsolamentoReducer from './IsolamentoReducer';
import { dist1 } from './CalculoIsolamento';
import ModuloShow from './ModuloShow';

let id = 1;

const Isolamento = () => {
  const [tipo, setTipo] = React.useState('');
  const [fatorSeguranca, setFatorSeguranca] = React.useState<number>(1.5);
  const [modulos, dispatch] = React.useReducer(IsolamentoReducer, []);

  const [dimensoes, setDimensoes] = React.useState({
    nome: '',
    maiorDimensao: '',
    menorDimensao: '',
    abertura: '',
    cargaIncendio: '',
    pavimentos: '',
    unidadeAutonoma: 'Não',
    compartimentacaohorizontal: 'Não',
    compartimentacaovertical: 'Não',
    parteFachada: '',
    bombeiro: fatorSeguranca,
    Dprojeto: '',
  });
  const [dimensoes1, setDimensoes1] = React.useState({
    nome: '',
    maiorDimensao: '',
    menorDimensao: '',
    abertura: '',
    cargaIncendio: '',
    pavimentos: '',
    unidadeAutonoma: 'Não',
    compartimentacaohorizontal: 'Não',
    compartimentacaovertical: 'Não',
    parteFachada: '',
    bombeiro: fatorSeguranca,
    Dprojeto: '',
  });

  function handleAdd() {
    if (
      dimensoes.menorDimensao !== '' ||
      dimensoes.maiorDimensao !== '' ||
      dimensoes.abertura !== '' ||
      dimensoes1.menorDimensao !== '' ||
      dimensoes1.maiorDimensao !== '' ||
      dimensoes1.abertura !== ''
    ) {
      if (
        +dimensoes.abertura >
          +dimensoes.menorDimensao * +dimensoes.maiorDimensao ||
        +dimensoes1.abertura >
          +dimensoes1.menorDimensao * +dimensoes1.maiorDimensao
      ) {
        return alert(
          'O somatório das aberturas deve ser sempre menor ou igual a área total da fachada',
        );
      }
      const calculoIsolamento1 = dist1({
        largura: +dimensoes.maiorDimensao,
        altura: +dimensoes.menorDimensao,
        abertura: +dimensoes.abertura,
        cargaIncendio: +dimensoes.cargaIncendio,
        fatorSegurança: fatorSeguranca,
      });

      const calculoIsolamento2 = dist1({
        largura: +dimensoes1.maiorDimensao,
        altura: +dimensoes1.menorDimensao,
        abertura: +dimensoes1.abertura,
        cargaIncendio: +dimensoes1.cargaIncendio,
        fatorSegurança: fatorSeguranca,
      });

      dispatch({
        type: 'add',
        id: id++,
        risco1: {
          risco: dimensoes.nome,
          maiorDimensao: +dimensoes.maiorDimensao,
          menorDimensao: +dimensoes.menorDimensao,
          abertura: +dimensoes.abertura,
          cargaIncendio: +dimensoes.cargaIncendio,
          distancia: calculoIsolamento1.distancia,
          alfa: calculoIsolamento1.alfa,
          x: calculoIsolamento1.x,
          y: calculoIsolamento1.y,
          z: calculoIsolamento1.z,
          pavimentos: dimensoes.pavimentos,
          unidadeAutonoma: dimensoes.unidadeAutonoma,
          compartimentacaohorizontal: dimensoes.compartimentacaohorizontal,
          compartimentacaovertical: dimensoes.compartimentacaovertical,
          parteFachada: dimensoes.parteFachada,
          bombeiro: dimensoes.bombeiro,
          severidade: calculoIsolamento1.valorSeveridade + 1,
          Dprojeto: dimensoes.Dprojeto,
          areaFachada: +dimensoes.maiorDimensao * +dimensoes.menorDimensao
        },
        risco2: {
          risco: dimensoes1.nome,
          maiorDimensao: +dimensoes1.maiorDimensao,
          menorDimensao: +dimensoes1.menorDimensao,
          abertura: +dimensoes1.abertura,
          cargaIncendio: +dimensoes1.cargaIncendio,
          distancia: calculoIsolamento2.distancia,
          alfa: calculoIsolamento2.alfa,
          x: calculoIsolamento2.x,
          y: calculoIsolamento2.y,
          z: calculoIsolamento2.z,
          pavimentos: dimensoes1.pavimentos,
          unidadeAutonoma: dimensoes1.unidadeAutonoma,
          compartimentacaohorizontal: dimensoes1.compartimentacaohorizontal,
          compartimentacaovertical: dimensoes1.compartimentacaovertical,
          parteFachada: dimensoes1.parteFachada,
          bombeiro: dimensoes1.bombeiro,
          severidade: calculoIsolamento2.valorSeveridade + 1,
          Dprojeto: dimensoes1.Dprojeto,
          areaFachada: +dimensoes1.maiorDimensao * +dimensoes1.menorDimensao
        },
      });
    } else return alert('Preencha todos os campos');
  }
  function handleDelete(id: number) {
    dispatch({
      type: 'delete',
      id: id,
    });
  }

  return (
    <div>
      <div className="d-flex flex-column gap-2">
        <span className="fw-bold fs-6">
          *** O isolamento de risco dá-se por:
        </span>
        <div className="d-flex column-gap-sm-5 row-gap-1 flex-column flex-md-row flex-wrap">
          <div className="d-flex gap-2">
            <input
              type="radio"
              id="distancia"
              name="isolamentoderisco"
              value="distancia"
              onChange={({ target }) => setTipo(target.value)}
              checked={tipo === 'distancia'}
            />
            <label htmlFor="distancia">Distância entre fachadas</label>
          </div>
          <div className="d-flex gap-2 align-items-center">
            <input
              type="radio"
              id="parede"
              name="isolamentoderisco"
              value="parede"
              onChange={({ target }) => setTipo(target.value)}
              checked={tipo === 'parede'}
            />
            <label htmlFor="parede">Parede corta-fogo</label>
          </div>
        </div>
      </div>
      <div>
        {tipo === 'distancia' && (
          <div className="my-4">
            <div className="d-flex  flex-column mt-3">
              <span className="fw-bold fs-6">
                *** O município em que está localizado as edificações possui
                Corpo de Bombeiros Militar com viaturas para combate a
                incêndios?
              </span>
              <div className="d-flex column-gap-sm-5 row-gap-1 flex-column flex-md-row flex-wrap mt-2">
                <div className="d-flex gap-2 align-items-center">
                  <input
                    type="radio"
                    id="fatorSegurancaSim"
                    name="fatorSeguranca"
                    value={1.5}
                    onChange={({ target }) => {setFatorSeguranca(+target.value);
                      setDimensoes((item) => ({ ...item, bombeiro: +target.value }))
                      setDimensoes1((item) => ({ ...item, bombeiro: +target.value }))
                    }}
                    checked={fatorSeguranca === 1.5}
                  />
                  <label htmlFor="fatorSegurancaSim">Sim</label>
                </div>
                <div className="d-flex gap-2 align-items-center">
                  <input
                    type="radio"
                    id="fatorSegurancaNao"
                    name="fatorSeguranca"
                    value={3}
                    onChange={({ target }) => {setFatorSeguranca(+target.value);
                      setDimensoes((item) => ({ ...item, bombeiro: +target.value }))
                      setDimensoes1((item) => ({ ...item, bombeiro: +target.value }))
                    }}
                    checked={fatorSeguranca === 3}
                  />
                  <label htmlFor="fatorSegurancaNao">Não</label>
                </div>
              </div>
            </div>
            <h2 className="my-4 text-primary">
              Cálculo de distância entre edificações
            </h2>
            <div className="my-4">
              <div className="d-flex flex-column gap-2">
                <div className="d-flex flex-column gap-2">
                  <label className="fw-bold">Nome da Fachada 01: </label>
                  <input
                    type="text"
                    onChange={({ target }) =>
                      setDimensoes((item) => ({ ...item, nome: target.value }))
                    }
                    className="form-control border border-primary-subtle"
                  />
                </div>
                <div className="d-flex flex-column gap-2">
                  <label className="fw-bold">Número de pavimentos: </label>
                  <input
                    type="text"
                    onChange={({ target }) =>
                      setDimensoes((item) => ({
                        ...item,
                        pavimentos: target.value,
                      }))
                    }
                    className="form-control border border-primary-subtle"
                  />
                </div>
                <div className="d-flex flex-column gap-2">
                  <span className="fw-bold fs-6">
                    Atende aos critérios para se enquadrar como “unidade
                    autônoma compartimentada”?
                  </span>
                  <div className="d-flex column-gap-sm-5 row-gap-1 flex-column flex-md-row flex-wrap">
                    <div className="d-flex gap-2">
                      <input
                        type="radio"
                        id="unidadeAutonomaSim"
                        value="Sim"
                        onChange={({ target }) =>
                          setDimensoes((item) => ({
                            ...item,
                            unidadeAutonoma: target.value,
                          }))
                        }
                        checked={dimensoes.unidadeAutonoma === 'Sim'}
                      />
                      <label htmlFor="unidadeAutonomaSim">Sim</label>
                    </div>
                    <div className="d-flex gap-2 align-items-center">
                      <input
                        type="radio"
                        id="unidadeAutonomaNao"
                        value="Não"
                        onChange={({ target }) =>
                          setDimensoes((item) => ({
                            ...item,
                            unidadeAutonoma: target.value,
                          }))
                        }
                        checked={dimensoes.unidadeAutonoma === 'Não'}
                      />
                      <label htmlFor="unidadeAutonomaNao">Não</label>
                    </div>
                  </div>
                </div>
                <div className="d-flex flex-column gap-2">
                  <span className="fw-bold fs-6">
                    Possui compartimentação horizontal?
                  </span>
                  <div className="d-flex column-gap-sm-5 row-gap-1 flex-column flex-md-row flex-wrap">
                    <div className="d-flex gap-2">
                      <input
                        type="radio"
                        id="compartimentacaohorizontalSim"
                        value="Sim"
                        onChange={({ target }) =>
                          setDimensoes((item) => ({
                            ...item,
                            compartimentacaohorizontal: target.value,
                          }))
                        }
                        checked={
                          dimensoes.compartimentacaohorizontal === 'Sim'
                        }
                      />
                      <label htmlFor="compartimentacaohorizontalSim">Sim</label>
                    </div>
                    <div className="d-flex gap-2 align-items-center">
                      <input
                        type="radio"
                        id="compartimentacaohorizontalNao"
                        value="Não"
                        onChange={({ target }) =>
                          setDimensoes((item) => ({
                            ...item,
                            compartimentacaohorizontal: target.value,
                          }))
                        }
                        checked={
                          dimensoes.compartimentacaohorizontal === 'Não'
                        }
                      />
                      <label htmlFor="compartimentacaohorizontalNao">Não</label>
                    </div>
                  </div>
                </div>
                <div className="d-flex flex-column gap-2">
                  <span className="fw-bold fs-6">
                    Possui compartimentação vertical?
                  </span>
                  <div className="d-flex column-gap-sm-5 row-gap-1 flex-column flex-md-row flex-wrap">
                    <div className="d-flex gap-2">
                      <input
                        type="radio"
                        id="compartimentacaoverticalSim"
                        value="Sim"
                        onChange={({ target }) =>
                          setDimensoes((item) => ({
                            ...item,
                            compartimentacaovertical: target.value,
                          }))
                        }
                        checked={dimensoes.compartimentacaovertical === 'Sim'}
                      />
                      <label htmlFor="compartimentacaoverticalSim">Sim</label>
                    </div>
                    <div className="d-flex gap-2 align-items-center">
                      <input
                        type="radio"
                        id="compartimentacaoverticalNao"
                        value="Não"
                        onChange={({ target }) =>
                          setDimensoes((item) => ({
                            ...item,
                            compartimentacaovertical: target.value,
                          }))
                        }
                        checked={dimensoes.compartimentacaovertical === 'Não'}
                      />
                      <label htmlFor="compartimentacaoverticalNao">Não</label>
                    </div>
                  </div>
                </div>
                <div className="d-flex flex-column  gap-2 ">
                  <label className="fw-bold">
                    Parte da fachada considerada no cálculo (Tabela 1 da IT 05)
                    :{' '}
                  </label>
                  <input
                    type="text"
                    onChange={({ target }) =>
                      setDimensoes((item) => ({
                        ...item,
                        parteFachada: target.value,
                      }))
                    }
                    className="form-control border-primary-subtle"
                  />
                </div>
                <div className="d-flex flex-column  gap-2 ">
                  <label className="fw-bold">Maior dimensão da fachada: </label>
                  <input
                    type="text"
                    placeholder="m"
                    onChange={({ target }) =>
                      setDimensoes((item) => ({
                        ...item,
                        maiorDimensao: target.value,
                      }))
                    }
                    className="form-control border-primary-subtle"
                  />
                </div>
                <div className="d-flex flex-column  gap-2 ">
                  <label className="fw-bold">Menor dimensão da fachada: </label>
                  <input
                    type="text"
                    placeholder="m"
                    onChange={({ target }) =>
                      setDimensoes((item) => ({
                        ...item,
                        menorDimensao: target.value,
                      }))
                    }
                    className="form-control border-primary-subtle"
                  />
                </div>
                <div className="d-flex flex-column  gap-2 ">
                  <label className="fw-bold">
                    Somatório das áreas das abertura:{' '}
                  </label>
                  <input
                    type="text"
                    placeholder="m²"
                    onChange={({ target }) =>
                      setDimensoes((item) => ({
                        ...item,
                        abertura: target.value,
                      }))
                    }
                    className="form-control border-primary-subtle"
                  />
                </div>
                <div className="d-flex flex-column  gap-2 ">
                  <label className="fw-bold">Carga incêndio: </label>
                  <input
                    type="text"
                    placeholder="MJ/m²"
                    onChange={({ target }) =>
                      setDimensoes((item) => ({
                        ...item,
                        cargaIncendio: target.value,
                      }))
                    }
                    className="form-control border-primary-subtle"
                  />
                </div>
              </div>
            </div>
            <div className='w-full bg-primary my-3 my-sm-5' style={{height: '2px'}}></div>
            <div className="my-4">
              <div className="d-flex flex-column gap-2">
                <div className="d-flex flex-column gap-2">
                  <label className="fw-bold">Nome da Fachada 02: </label>
                  <input
                    type="text"
                    onChange={({ target }) =>
                      setDimensoes1((item) => ({ ...item, nome: target.value }))
                    }
                    className="form-control border border-primary-subtle"
                  />
                </div>
                <div className="d-flex flex-column gap-2">
                  <label className="fw-bold">Número de pavimentos: </label>
                  <input
                    type="text"
                    onChange={({ target }) =>
                      setDimensoes1((item) => ({
                        ...item,
                        pavimentos: target.value,
                      }))
                    }
                    className="form-control border border-primary-subtle"
                  />
                </div>
                <div className="d-flex flex-column gap-2">
                  <span className="fw-bold fs-6">
                    Atende aos critérios para se enquadrar como “unidade
                    autônoma compartimentada”?
                  </span>
                  <div className="d-flex column-gap-sm-5 row-gap-1 flex-column flex-md-row flex-wrap">
                    <div className="d-flex gap-2">
                      <input
                        type="radio"
                        id="unidadeAutonomaSim1"
                        value="Sim"
                        onChange={({ target }) =>
                          setDimensoes1((item) => ({
                            ...item,
                            unidadeAutonoma: target.value,
                          }))
                        }
                        checked={dimensoes1.unidadeAutonoma === 'Sim'}
                      />
                      <label htmlFor="unidadeAutonomaSim1">Sim</label>
                    </div>
                    <div className="d-flex gap-2 align-items-center">
                      <input
                        type="radio"
                        id="unidadeAutonomaNao1"
                        value="Não"
                        onChange={({ target }) =>
                          setDimensoes1((item) => ({
                            ...item,
                            unidadeAutonoma: target.value,
                          }))
                        }
                        checked={dimensoes1.unidadeAutonoma === 'Não'}
                      />
                      <label htmlFor="unidadeAutonomaNao1">Não</label>
                    </div>
                  </div>
                </div>
                <div className="d-flex flex-column gap-2">
                  <span className="fw-bold fs-6">
                    Possui compartimentação horizontal?
                  </span>
                  <div className="d-flex column-gap-sm-5 row-gap-1 flex-column flex-md-row flex-wrap">
                    <div className="d-flex gap-2">
                      <input
                        type="radio"
                        id="compartimentacaohorizontalSim1"
                        value="Sim"
                        onChange={({ target }) =>
                          setDimensoes1((item) => ({
                            ...item,
                            compartimentacaohorizontal: target.value,
                          }))
                        }
                        checked={
                          dimensoes1.compartimentacaohorizontal === 'Sim'
                        }
                      />
                      <label htmlFor="compartimentacaohorizontalSim1">Sim</label>
                    </div>
                    <div className="d-flex gap-2 align-items-center">
                      <input
                        type="radio"
                        id="compartimentacaohorizontalNao1"
                        value="Não"
                        onChange={({ target }) =>
                          setDimensoes1((item) => ({
                            ...item,
                            compartimentacaohorizontal: target.value,
                          }))
                        }
                        checked={
                          dimensoes1.compartimentacaohorizontal === 'Não'
                        }
                      />
                      <label htmlFor="compartimentacaohorizontalNao1">Não</label>
                    </div>
                  </div>
                </div>
                <div className="d-flex flex-column gap-2">
                  <span className="fw-bold fs-6">
                    Possui compartimentação vertical?
                  </span>
                  <div className="d-flex column-gap-sm-5 row-gap-1 flex-column flex-md-row flex-wrap">
                    <div className="d-flex gap-2">
                      <input
                        type="radio"
                        id="compartimentacaoverticalSim1"
                        value="Sim"
                        onChange={({ target }) =>
                          setDimensoes1((item) => ({
                            ...item,
                            compartimentacaovertical: target.value,
                          }))
                        }
                        checked={dimensoes1.compartimentacaovertical === 'Sim'}
                      />
                      <label htmlFor="compartimentacaoverticalSim1">Sim</label>
                    </div>
                    <div className="d-flex gap-2 align-items-center">
                      <input
                        type="radio"
                        id="compartimentacaoverticalNao1"
                        value="Não"
                        onChange={({ target }) =>
                          setDimensoes1((item) => ({
                            ...item,
                            compartimentacaovertical: target.value,
                          }))
                        }
                        checked={dimensoes1.compartimentacaovertical === 'Não'}
                      />
                      <label htmlFor="compartimentacaoverticalNao1">Não</label>
                    </div>
                  </div>
                </div>
                <div className="d-flex flex-column  gap-2 ">
                  <label className="fw-bold">
                    Parte da fachada considerada no cálculo (Tabela 1 da IT 05)
                    :{' '}
                  </label>
                  <input
                    type="text"
                    onChange={({ target }) =>
                      setDimensoes1((item) => ({
                        ...item,
                        parteFachada: target.value,
                      }))
                    }
                    className="form-control border-primary-subtle"
                  />
                </div>
                <div className="d-flex flex-column  gap-2 ">
                  <label className="fw-bold">Maior dimensão da fachada: </label>
                  <input
                    type="text"
                    placeholder="m"
                    onChange={({ target }) =>
                      setDimensoes1((item) => ({
                        ...item,
                        maiorDimensao: target.value,
                      }))
                    }
                    className="form-control border-primary-subtle"
                  />
                </div>
                <div className="d-flex flex-column  gap-2 ">
                  <label className="fw-bold">Menor dimensão da fachada: </label>
                  <input
                    type="text"
                    placeholder="m"
                    onChange={({ target }) =>
                      setDimensoes1((item) => ({
                        ...item,
                        menorDimensao: target.value,
                      }))
                    }
                    className="form-control border-primary-subtle"
                  />
                </div>
                <div className="d-flex flex-column  gap-2 ">
                  <label className="fw-bold">
                    Somatório das áreas das abertura:{' '}
                  </label>
                  <input
                    type="text"
                    placeholder="m²"
                    onChange={({ target }) =>
                      setDimensoes1((item) => ({
                        ...item,
                        abertura: target.value,
                      }))
                    }
                    className="form-control border-primary-subtle"
                  />
                </div>
                <div className="d-flex flex-column  gap-2 ">
                  <label className="fw-bold">Carga incêndio: </label>
                  <input
                    type="text"
                    placeholder="MJ/m²"
                    onChange={({ target }) =>
                      setDimensoes1((item) => ({
                        ...item,
                        cargaIncendio: target.value,
                      }))
                    }
                    className="form-control border-primary-subtle"
                  />
                </div>
              </div>
            </div>
            <div className='w-full bg-primary my-3 my-sm-5' style={{height: '2px'}}></div>
                <div className="d-flex flex-column  gap-2 my-4 ">
                  <label className="fw-bold">
                    Qual a distância em projeto (m)?
                  </label>
                  <input
                    type="text"
                    placeholder="m"
                    onChange={({ target }) => {
                      setDimensoes1((item) => ({
                        ...item,
                        Dprojeto: target.value,
                      }));
                      setDimensoes((item) => ({
                        ...item,
                        Dprojeto: target.value,
                      }))
                    }
                    }
                    className="form-control border-primary-subtle"
                  />
                </div>
            <button className="btn btn-primary btn-lg" onClick={handleAdd}>
              Calcular
            </button>
          </div>
        )}
      </div>
      <div>
        <ModuloShow modulos={modulos} onDelete={handleDelete} />
      </div>
    </div>
  );
};

export default Isolamento;
