import React from 'react';
import Brigada from '../../../Bases/Brigada/Brigada';
import { useRouter } from 'next/router';
import Pdf from '../../../geradorPdf/pdf';

const BrigadaPage = () => {
  const router = useRouter()
  const { ocupacao} = router.query
  if(typeof ocupacao === "string"){
    if (ocupacao === 'A-2') {
      return (
        <div>
          <h1>Brigada de incêndio</h1>
          <h3>
            Para a divisão A-2, todos os empregados da edificação deverão compor
            a brigada de incêndio e, caso não haja empregados, recomenda-se que
            haja treinamento da população para evacuação e utilização dos
            equipamentos e medidas preventivas da edificação.
          </h3>
          <p>Nível de Treinamento Exigido: Básico</p>
          <p>Nível de Treinamento Recomendado: Básico</p>
        </div>
      );
    }
    return (
      <>
        <Brigada />
      
      </>
    )
  }
};

export default BrigadaPage;
