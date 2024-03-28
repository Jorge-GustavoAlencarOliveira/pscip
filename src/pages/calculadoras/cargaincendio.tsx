import React from 'react';
import canSSRAuth from '../utils/canSSRAuth';
import MetodoDeterministico from '../../../Bases/Carga/Deterministico/metodoDeterministico';
import Layout from '../../../Components/UI/layout';
import MetodoProbabilistico from '../../../Bases/Carga/Probabilistico/metodoProbabilistico';

type MetodoProps = 'deterministico' | 'probabilistico';

const CargaincendioPage = () => {
  const [metodo, setMetodo] = React.useState<MetodoProps>('probabilistico');
  return (
    <>
      <Layout>
        <div className="mb-4">
          <h4 className="text-primary mb-4">Cálculo de carga incêndio</h4>
          <span>Escolha o método que deseja calcular a carga incêndio.</span>
          <div className="d-flex gap-3 mt-2">
            <div className="d-flex gap-2">
              <input
                id="probabilistico"
                type="radio"
                onChange={() => setMetodo('probabilistico')}
                checked={metodo === 'probabilistico'}
              />
              <label htmlFor="probabilistico" className="fw-bold">
                Probabilístico
              </label>
            </div>
            <div className="d-flex gap-2">
              <input
                id="deterministico"
                type="radio"
                onChange={() => setMetodo('deterministico')}
                checked={metodo === 'deterministico'}
                className="pe-auto"
              />
              <label htmlFor="deterministico" className="fw-bold">
                Determinístico
              </label>
            </div>
          </div>
        </div>
        {metodo === 'probabilistico' ? (
          <MetodoProbabilistico />
        ) : (
          <MetodoDeterministico />
        )}
      </Layout>
    </>
  );
};

export default CargaincendioPage;

export const getServerSideProps = canSSRAuth(async () => {
  return {
    props: {},
  };
});
