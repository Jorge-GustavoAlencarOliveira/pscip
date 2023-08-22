import React from 'react';
import { DataStorage } from '../../dataContext';
import TabelaDescricao from '../../Tabelas/tabelaDescricao';
import { listaOcupacao } from '../../Ocupacoes/ListaOcupacoes';
import Layout from '../../Components/layout';
import ProtectedRoute from '../../Components/ProtectedRoute/ProtectedRouter';
import Result from '../../result/result';

const ShowResult = () => {
  return (
    <>
      <ProtectedRoute>
        <Layout>
          <Result />
        </Layout>
      </ProtectedRoute>
    </>
  );
};

export default ShowResult;
