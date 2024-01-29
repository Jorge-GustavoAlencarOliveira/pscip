import React from 'react';
import Layout from '../../../Components/layout';
import Link from 'next/link';
import canSSRAuth from '../utils/canSSRAuth';

const CalculadorasPage = () => {
  return (
    <Layout>
      <section className="d-flex flex-column">
        <h3 className="text-primary text-center mb-5">Calculadoras</h3>
        <nav>
          <ul className="m-auto">
            <li>
              <Link
                href="/calculadoras/cargaincendio"
                className="d-block mb-3 h4"
              >
                Carga de Incêndio
              </Link>
            </li>
            <li>
              <Link href="/calculadoras/isolamento" className="d-block mb-3 h4">
                Isolamento de Risco
              </Link>
            </li>
            <li>
              <Link href="/calculadoras/saida" className="d-block mb-3 h4">
                Saídas de Emergência
              </Link>
            </li>
            <li>
              <Link href="/calculadoras/brigada" className="d-block h4">
                Brigada de Incêndio
              </Link>
            </li>
          </ul>
        </nav>
      </section>
    </Layout>
  );
};

export default CalculadorasPage;

export const getServerSideProps = canSSRAuth(async () => {
  return {
    props: {},
  };
});