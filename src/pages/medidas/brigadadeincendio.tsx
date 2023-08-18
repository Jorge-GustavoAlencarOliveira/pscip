import React from 'react';
import Brigada from '../../../Bases/Brigada/Brigada';
import { useRouter } from 'next/router';
import Layout from '../../../Components/layout';

const BrigadaPage = () => {
  const router = useRouter()
    return (
      <>
        <Layout>
          <Brigada />
        </Layout>
      </>
    )
  }

export default BrigadaPage;
