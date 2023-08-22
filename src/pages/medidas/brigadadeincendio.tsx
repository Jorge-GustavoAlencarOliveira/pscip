import React from 'react';
import Brigada from '../../../Bases/Brigada/Brigada';
import { useRouter } from 'next/router';
import Layout from '../../../Components/layout';
import ProtectedRoute from '../../../Components/ProtectedRoute/ProtectedRouter';

const BrigadaPage = () => {
  const router = useRouter()
    return (
      <>
      <ProtectedRoute>
        <Layout>
          <Brigada />
        </Layout>
      </ProtectedRoute>
      </>
    )
  }

export default BrigadaPage;
