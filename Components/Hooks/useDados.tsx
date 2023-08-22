interface dadosProps {
  areaConstruida?: string;
  areaAconstruir?: string;
  altura?: string;
  pavimentos?: string;
  areaTotal?: number;
  dataConstrucao?: string;
  compartimentacao?: string
}


export const UseDados = ({areaConstruida, areaAconstruir, altura, pavimentos, areaTotal, dataConstrucao, compartimentacao}:dadosProps) => {
   function dadosValores (){
     return {
      areaConstruida: areaConstruida,
      areaAconstruir: areaAconstruir,
      altura: altura,
      pavimentos: pavimentos,
      areaTotal: areaTotal,
      dataConstrucao: dataConstrucao,
      compartimentacao: compartimentacao,
    }
   }
  return dadosValores 
}




