import React from 'react';
import { useRouter } from 'next/router';
import A1 from '../../Ocupacoes/A2';
import Head from 'next/head';
import { DataStorage } from '../../dataContext';
import ReservaTecnica from '../../Bases/reserva';
import Numerodesaidas from '../../Bases/numerodesaidas';
import Brigada from '../../Bases/brigada';

const Result = () => {
  const router = useRouter();
  const { ocupacao, cargaIncendio } = React.useContext(DataStorage);
  if (ocupacao === 'A-2') {
    return (
      <div>
        <Head>
          <title>Medidas de Segurança</title>
        </Head>
        <A1 />
        <button onClick={() => router.back()}>Voltar</button>
      </div>
    );
  }
  return (
    <>
      <ReservaTecnica />
      <Numerodesaidas />
      <Brigada />
    </>
  );
};

export default Result;
