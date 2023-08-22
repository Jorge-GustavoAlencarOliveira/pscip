import React from 'react';
import Regioes from '../../Components/regiao';
import Ocupacao from '../../Components/ocupacao';
import ProtectedRoute from '../../Components/ProtectedRoute/ProtectedRouter';
import Layout from '../../Components/layout';
import { useRouter } from 'next/router';
export default function Home() {
  const [separacao, setSeparacao] = React.useState<string>('');
  const router = useRouter()
  return (
    <>
      <ProtectedRoute>
        <Layout>
          <div>
              <button
                onClick={() => router.push('/projeto')}
                className="btn btn-primary my-3"
              >
                Iniciar Projeto
              </button>
          </div>
        </Layout>
      </ProtectedRoute>
    </>
  );
}
