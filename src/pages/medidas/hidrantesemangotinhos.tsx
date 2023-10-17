import React from 'react';
import ReservaTecnica from '../../../Bases/ReservaTecnica/reserva';
import { useRouter } from 'next/router';
import TabelaDescricao from '../../../Tabelas/tabelaDescricao';
const HidrantesemangotinhosPage = () => {
  const {descricao} = TabelaDescricao()
  const router = useRouter();
  const {areaTotal, ocupacao}  = router.query;
  console.log(areaTotal)
  if(typeof areaTotal === 'string' && typeof ocupacao === 'string') {   
    return (
      <>
        {/* <ReservaTecnica area={areaTotal} cargaIncendio={carga} ocupacao={ocupacao} /> */}
      </>
    );
  }
  return null
};

export default HidrantesemangotinhosPage;
