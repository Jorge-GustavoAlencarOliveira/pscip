import React from 'react';
import Regioes from '../../Components/regiao';
import Ocupacao from '../../Components/ocupacao';
import ProtectedRoute from '../../Components/ProtectedRoute/ProtectedRouter';
import Layout from '../../Components/layout';
import { useRouter } from 'next/router';
export default function Home() {
  const [separacao, setSeparacao] = React.useState<string>('');
  const [iniciar, setIniciar] = React.useState(false);
  const router = useRouter()
  return (
    <>
      <ProtectedRoute>
        <Layout>

          <div className="d-flex flex-column gap-2">
            <div>
              <button
                onClick={() => router.push('/projeto')}
                className="btn btn-primary my-3"
              >
                Iniciar Projeto
              </button>
            </div>
            {iniciar && (
              <div>
                <span className="fw-bold">
                  Existe separação entre edificações?
                </span>
                <div className="d-flex gap-5">
                  <div className="d-flex gap-1 align-items-center">
                    <input
                      type="radio"
                      id="separacaoSim"
                      name="isolamento"
                      value="separacaoSim"
                      onChange={({ target }) => setSeparacao(target.value)}
                      checked={separacao === 'separacaoSim'}
                    />
                    <label htmlFor="separacaoSim">Sim</label>
                  </div>
                  <div className="d-flex gap-1 align-items-center">
                    <input
                      type="radio"
                      id="separacaoNao"
                      name="isolamento"
                      value="separacaoNao"
                      onChange={({ target }) => setSeparacao(target.value)}
                      checked={separacao === 'separacaoNao'}
                    />
                    <label htmlFor="separacaoNao">Não</label>
                  </div>
                </div>
                <div>{separacao === 'separacaoNao' && <Ocupacao />}</div>
                <div>{separacao === 'separacaoSim' && <Regioes />}</div>
              </div>
            )}
          </div>
        </Layout>
      </ProtectedRoute>
    </>
  );
}
