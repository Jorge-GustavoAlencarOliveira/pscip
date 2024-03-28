import React, { ButtonHTMLAttributes } from 'react'
import ButtonNext from '../Navbar/buttonNext';
import { useContextProjeto } from '../Context/contextProjeto';
import { cleanNumberInteiro } from '../../Bases/formatarNumero';
import { medidasSeguranca as DimensionarMedida } from '../../Bases/medidas';
import Accordion from '../../Components/Accordion/accordion';

interface pageProps {
  isActive: boolean;
  onshow: (index: number) => void;
}

const DimensionamentoMedidasDeSeguranca = ({ isActive, onshow }: pageProps) => {
  const {allDataBuilding: {regioes}} = useContextProjeto()
  if(isActive && regioes){
    const altura = cleanNumberInteiro(regioes[0].dados[0].altura) 
    const areaTotal = regioes[0].dados[0].areaTotal
  return (
    <div>
      <div>
        <h4 className='text-primary'>Dimensionamento das medidas segurança</h4>
         <span>Dimensione cada medida de segurança individualmente.</span>
      </div>
      <div className="my-4">
      
      </div>
      <ButtonNext onclick={() => onshow(6)}/>
    </div>
  )}
  return null
}

export default DimensionamentoMedidasDeSeguranca

// {medidasSeguranca?.map((item, index) => {
//   return (
//     <Accordion key={index} title={item}>
//       {/* {DimensionarMedida({ medida: item, altura, divisao: regioes[0].dados[1][0], areaTotal, ocupacoes: regioes[0].dados[1] })} */}
//     </Accordion>
//   );
// })}