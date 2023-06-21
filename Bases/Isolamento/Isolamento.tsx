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
    largura: '',
    altura: '',
    abertura: '',
    cargaIncendio: '',
  });
  const [dimensoes1, setDimensoes1] = React.useState({
    nome: '',
    largura: '',
    altura: '',
    abertura: '',
    cargaIncendio: '',
  });

  function handleAdd() {
    if (
      dimensoes.altura !== '' ||
      dimensoes.largura !== '' ||
      dimensoes.abertura !== '' ||
      dimensoes1.altura !== '' ||
      dimensoes1.largura !== '' ||
      dimensoes1.abertura !== ''
    ) {
      if (
        +dimensoes.abertura > +dimensoes.altura * +dimensoes.largura ||
        +dimensoes1.abertura > +dimensoes1.altura * +dimensoes1.largura
      ) {
        return alert(
          'O somatório das aberturas deve ser sempre menor ou igual a área total da fachada',
        );
      }
      const calculoIsolamento1 = dist1({
        largura: +dimensoes.largura,
        altura: +dimensoes.altura,
        abertura: +dimensoes.abertura,
        cargaIncendio: +dimensoes.cargaIncendio,
        fatorSegurança: fatorSeguranca,
      });

      const calculoIsolamento2 = dist1({
        largura: +dimensoes1.largura,
        altura: +dimensoes1.altura,
        abertura: +dimensoes1.abertura,
        cargaIncendio: +dimensoes1.cargaIncendio,
        fatorSegurança: fatorSeguranca,
      });

      dispatch({
        type: 'add',
        id: id++,
        risco1: {
          risco: dimensoes.nome,
          largura: +dimensoes.largura,
          altura: +dimensoes.altura,
          abertura: +dimensoes.abertura,
          cargaIncendio: +dimensoes.cargaIncendio,
          distancia: calculoIsolamento1.distancia,
          alfa: calculoIsolamento1.alfa,
          x: calculoIsolamento1.x,
          y: calculoIsolamento1.y,
          z: calculoIsolamento1.z,
        },
        risco2: {
          risco: dimensoes1.nome,
          largura: +dimensoes1.largura,
          altura: +dimensoes1.altura,
          abertura: +dimensoes1.abertura,
          cargaIncendio: +dimensoes1.cargaIncendio,
          distancia: calculoIsolamento2.distancia,
          alfa: calculoIsolamento2.alfa,
          x: calculoIsolamento2.x,
          y: calculoIsolamento2.y,
          z: calculoIsolamento2.z,
        },
      });
    }
  }
  console.log(modulos);
  function handleDelete(id: number) {
    dispatch({
      type: 'delete',
      id: id,
    });
  }

  return (
    <>
      <div>
        <span>O isolamento de risco dá-se por:</span>
        <div>
          <input
            type="radio"
            id="distancia"
            name="isolamentoderisco"
            value="distancia"
            onChange={({ target }) => setTipo(target.value)}
            checked={tipo === 'distancia'}
          />
          <label htmlFor="distancia">Distância entre fachadas</label>
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
      {tipo === 'distancia' && (
        <div>
          <div>
            <br />
            <span>
              O município em que está localizado as edificações possui Corpo de
              Bombeiros Militar com viaturas para combate a incêndios?
            </span>
            <input
              type="radio"
              id="fatorSegurancaSim"
              name="fatorSeguranca"
              value={1.5}
              onChange={({ target }) => setFatorSeguranca(+target.value)}
              checked={fatorSeguranca === 1.5}
            />
            <label htmlFor="fatorSegurancaSim">Sim</label>
            <input
              type="radio"
              id="fatorSegurancaNao"
              name="fatorSeguranca"
              value={3}
              onChange={({ target }) => setFatorSeguranca(+target.value)}
              checked={fatorSeguranca === 3}
            />
            <label htmlFor="fatorSegurancaNao">Não</label>
          </div>
          <div style={{ marginTop: '2rem' }}>
            <div>
              <div>
                <span>Nome da Região: </span>
                <input
                  type="text"
                  onChange={({ target }) =>
                    setDimensoes((item) => ({ ...item, nome: target.value }))
                  }
                />
              </div>
              <div>
                <span>Largura: </span>
                <input
                  type="text"
                  placeholder="m"
                  onChange={({ target }) =>
                    setDimensoes((item) => ({ ...item, largura: target.value }))
                  }
                />
              </div>
            </div>
            <div>
              <span>Altura: </span>
              <input
                type="text"
                placeholder="m"
                onChange={({ target }) =>
                  setDimensoes((item) => ({ ...item, altura: target.value }))
                }
              />
            </div>
            <div>
              <span>Somatório das áreas das abertura: </span>
              <input
                type="text"
                placeholder="m²"
                onChange={({ target }) =>
                  setDimensoes((item) => ({ ...item, abertura: target.value }))
                }
              />
            </div>
            <div>
              <span>Carga incêndio: </span>
              <input
                type="text"
                placeholder="MJ/m²"
                onChange={({ target }) =>
                  setDimensoes((item) => ({
                    ...item,
                    cargaIncendio: target.value,
                  }))
                }
              />
            </div>
          </div>
          <br />
          <br />
          <div>
            <div>
              <div>
                <span>Nome da Região: </span>
                <input
                  type="text"
                  onChange={({ target }) =>
                    setDimensoes1((item) => ({ ...item, nome: target.value }))
                  }
                />
              </div>
              <div>
                <span>Largura: </span>
                <input
                  type="text"
                  placeholder="m"
                  onChange={({ target }) =>
                    setDimensoes1((item) => ({
                      ...item,
                      largura: target.value,
                    }))
                  }
                />
              </div>
            </div>
            <div>
              <span>Altura: </span>
              <input
                type="text"
                placeholder="m"
                onChange={({ target }) =>
                  setDimensoes1((item) => ({ ...item, altura: target.value }))
                }
              />
            </div>
            <div>
              <span>Somatório das áreas das abertura: </span>
              <input
                type="text"
                placeholder="m²"
                onChange={({ target }) =>
                  setDimensoes1((item) => ({ ...item, abertura: target.value }))
                }
              />
            </div>
            <div>
              <span>Carga incêndio: </span>
              <input
                type="text"
                placeholder="MJ/m²"
                onChange={({ target }) =>
                  setDimensoes1((item) => ({
                    ...item,
                    cargaIncendio: target.value,
                  }))
                }
              />
            </div>
          </div>
          <br />
          <br />
          <button onClick={handleAdd}>Calcular</button>
        </div>
      )}
      <ModuloShow modulos={modulos} onDelete={handleDelete} />
    </>
  );
};

export default Isolamento;
