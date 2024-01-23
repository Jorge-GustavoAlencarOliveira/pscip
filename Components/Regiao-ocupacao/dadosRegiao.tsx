import React from 'react';
import Construcao from '../../Bases/construcao';
import { dadosProps } from '../Hooks/useDados';
import {
  formatarNumero,
  cleanNumber,
  somenteInteiro,
} from '../../Bases/formatarNumero';
import { Form } from 'react-bootstrap';

type MistaProps = 'mistaSim' | 'mistaNao';

type DadosProps = {
  dados: dadosProps;
  setDadosEdificacao: (key: string, value: number | string) => void;
};

const DadosRegiao = ({ dados, setDadosEdificacao }: DadosProps) => {
  const areaTotal =
    cleanNumber(dados.areaConstruida) + cleanNumber(dados.areaAconstruir);
  const [mista, setMista] = React.useState<MistaProps>('mistaNao');

  React.useEffect(() => {
    setDadosEdificacao('areaTotal', formatarNumero(areaTotal.toString()));
  }, [dados.areaAconstruir, dados.areaConstruida]);


  return (
    <>
      <div className="d-flex flex-column  gap-2">
        <Form>
          <div className="row">
            <div className="col-6">
              <Form.Group className="mb-3">
                <Form.Label className='fw-bold'>Área construída</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="m²"
                  value={`${dados.areaConstruida} m²`}
                  onChange={({ target }) => {
                    setDadosEdificacao(
                      'areaConstruida',
                      formatarNumero(target.value),
                    );
                  }}
                />
              </Form.Group>
            </div>
            <div className="col-6">
              <Form.Group className="mb-3">
                <Form.Label className='fw-bold'>Área a construir</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="m²"
                  value={`${dados.areaAconstruir} m²`}
                  onChange={({ target }) => {
                    setDadosEdificacao(
                      'areaAconstruir',
                      formatarNumero(target.value),
                    );
                  }}
                />
              </Form.Group>
            </div>
          </div>
          <div className="row">
            <div className="col-6">
              <Form.Group className="mb-3">
                <Form.Label className='fw-bold'>Área Total</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="m²"
                  value={`${formatarNumero(areaTotal.toString())} m²`}
                  readOnly
                />
              </Form.Group>
            </div>
            <div className="col-6">
              <Form.Group className="mb-3">
                <Form.Label className='fw-bold'>
                  Altura da edificação
                </Form.Label>
                <Form.Control
                  type="text"
                  placeholder="m"
                  value={dados.altura}
                  onChange={({ target }) =>
                    setDadosEdificacao('altura', formatarNumero(target.value))
                  }
                />
              </Form.Group>
            </div>
          </div>
          <div className="row">
            <div className="col-6">
              <Form.Group className="mb-3">
                <Form.Label className='fw-bold'>
                  Número de pavimentos
                </Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Unidades"
                  value={dados.pavimentos}
                  onChange={({ target }) =>
                    setDadosEdificacao(
                      'pavimentos',
                      somenteInteiro(target.value),
                    )
                  }
                />
              </Form.Group>
            </div>
          </div>
          <div className="row">
            <div className="col-8">
              <Construcao
                setDadosEdificacao={setDadosEdificacao}
                dados={dados.dataConstrucao}
              />
            </div>
            <div className="col-4">
              <span className="fw-bold">A ocupação é mista?</span>
              <div className="d-flex gap-5 my-2">
                <div className="d-flex align-items-center gap-2">
                  <input
                    type="radio"
                    id="mistaSim"
                    value="mistaSim"
                    onChange={({ target }) => setMista('mistaSim')}
                    checked={mista === 'mistaSim'}
                  />
                  <label htmlFor="mistaSim">Sim</label>
                </div>
                <div className="d-flex align-items-center gap-2">
                  <input
                    type="radio"
                    id="mistaNao"
                    value="mistaNao"
                    onChange={({ target }) => setMista('mistaNao')}
                    checked={mista === 'mistaNao'}
                  />
                  <label htmlFor="mistaNao">Não</label>
                </div>
              </div>
              {mista === 'mistaSim' && (
                <div className="d-flex flex-column">
                  <div className="mb-4">
                    <span className="fw-bold">
                      Há compartimentação entre as ocupações?
                    </span>
                    <div className="d-flex gap-5 my-2">
                      <div className="d-flex align-items-center gap-2">
                        <input
                          type="radio"
                          id="Sim"
                          value="compartimentacaoSim"
                          onChange={({ target }) => {
                            setDadosEdificacao(
                              'compartimentacao',
                              target.value,
                            );
                          }}
                          checked={
                            dados.compartimentacao === 'compartimentacaoSim'
                          }
                        />
                        <label htmlFor="compartimentacaoSim">Sim</label>
                      </div>
                      <div className="d-flex align-items-center gap-2">
                        <input
                          type="radio"
                          id="compartimentacaoNao"
                          value="compartimentacaoNao"
                          onChange={({ target }) => {
                            setDadosEdificacao(
                              'compartimentacao',
                              target.value,
                            );
                          }}
                          checked={
                            dados.compartimentacao === 'compartimentacaoNao'
                          }
                        />
                        <label htmlFor="mistaNao">Não</label>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </Form>
      </div>
    </>
  );
};

export default DadosRegiao;
