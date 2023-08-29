import React from 'react';

interface dadosProps {
  areaConstruida: string;
  areaAconstruir: string;
  altura: string;
  pavimentos: string;
  areaTotal: number;
  dataConstrucao: string;
  compartimentacao: string;
}

interface enderecoProps {
  tipo: string;
  logradouro: string;
  numero: string;
  bairro: string;
  cidade: string;
  estado: string;
}

export interface informacoesProps {
  projeto: string;
  proprietario: string;
  cpf: string;
  razaoSocial: string;
  cnpj: string;
  endereco: enderecoProps;
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
  const [endereco, setEndereco] = React.useState<enderecoProps>({
    tipo: '',
    logradouro: '',
    numero: '',
    bairro: '',
    cidade: '',
    estado: '',
  },)
  const [information, setInformation] = React.useState<informacoesProps>({
    projeto: '',
    proprietario: '',
    cpf: '',
    razaoSocial: '',
    cnpj: '',
    endereco: endereco
  });

  function setInformacoesEdificacao(key: string, value: string | number | enderecoProps) {
    setInformation((item) => ({ ...item, [key]: value }));
  }

  function resetInformacoesEdificacao() {
    setInformation({
      projeto: '',
      proprietario: '',
      cpf: '',
      razaoSocial: '',
      cnpj: '',
      endereco: {
        tipo: '',
        logradouro: '',
        numero: '',
        bairro: '',
        cidade: '',
        estado: '',
      },
    });
  }

  function setDadosEdificação(
    key: string,
    value: string | number,
  ) {
    setDados((item) => ({ ...item, [key]: value }));
  }

  function setEnderecoEdificação(
    key: string,
    value: string,
  ) {
    setEndereco((item) => ({ ...item, [key]: value }));
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
    setEnderecoEdificação,
    endereco
  };
};
