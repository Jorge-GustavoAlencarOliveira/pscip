import React from 'react';

export interface dadosProps {
  areaConstruida: string;
  areaAconstruir: string;
  altura: string;
  pavimentos: string;
  areaTotal: number;
  dataConstrucao: string;
  compartimentacao: string;
}

export interface informacoesProps {
  projeto: string;
  proprietario: string;
  cpf: string;
  razaoSocial: string;
  cnpj: string;
  tipo: string;
  logradouro: string;
  numero: string;
  bairro: string;
  cidade: string;
  estado: string;
}

export const UseDadosEdificação = () => {
  const [dados, setDados] = React.useState<dadosProps>({
    areaConstruida: '',
    areaAconstruir: '',
    altura: '',
    pavimentos: '',
    areaTotal: 0,
    dataConstrucao: 'Nova',
    compartimentacao: 'compartimentacaoNao',
  });
  const [information, setInformation] = React.useState<informacoesProps>({
    projeto: '',
    proprietario: '',
    cpf: '',
    razaoSocial: '',
    cnpj: '',
    tipo: '',
    logradouro: '',
    numero: '',
    bairro: '',
    cidade: '',
    estado: '',
  });

  function setAllInformacoesEdificacao(dados: informacoesProps){
    setInformation(dados)
  }

  function setInformacoesEdificacao(key: string, value: string | number) {
    setInformation((item) => ({ ...item, [key]: value }));
  }

  function resetInformacoesEdificacao() {
    setInformation({
      projeto: '',
      proprietario: '',
      cpf: '',
      razaoSocial: '',
      cnpj: '',
      tipo: '',
      logradouro: '',
      numero: '',
      bairro: '',
      cidade: '',
      estado: '',
    });
  }

  function setDadosEdificação(
    key: string,
    value: string | number,
  ) {
    setDados((item) => ({ ...item, [key]: value }));
  }


  function resetDadosEdificação() {
    setDados({
      areaConstruida: '',
      areaAconstruir: '',
      altura: '',
      pavimentos: '',
      areaTotal: 0,
      dataConstrucao: 'Nova',
      compartimentacao: 'compartimentacaoNao',
    });
  }

  return {
    setDadosEdificação,
    resetDadosEdificação,
    dados,
    setInformacoesEdificacao,
    information,
    resetInformacoesEdificacao,
    setAllInformacoesEdificacao
  };
};
