import React from 'react';
import z from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

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
  endereco: {
    tipo: string;
    logradouro: string;
    numero: string;
    bairro: string;
    cidade: string;
    estado: string;
  };
}

const capitalizeWord = (value: string) => {
  if (value) {
    const valueCapitalize = value
      .trim()
      .split(' ')
      .map((word) => {
        word[0].toLocaleLowerCase();
        return word[0].toLocaleUpperCase().concat(word.substring(1));
      })
      .join(' ');
    return valueCapitalize;
  }
};

const informationsSchema = z.object({
  projeto: z
    .string()
    .nonempty({ message: 'Dê um nome ao seu projeto' })
    .min(5, 'Dê um nome de no mínimo 5 caracteres'),
  proprietario: z.string().nonempty('Esse campo é obrigatório').transform(capitalizeWord),
  cpf: z.string().min(11, 'Insira um CPF válido').regex(new RegExp(/^[0-9]{3}\.?[0-9]{3}\.?[0-9]{3}\-?[0-9]{2}/), 'Valor do CPF inválido'),
  razaoSocial: z.string().nonempty('Esse campo é obrigatório'),
  cnpj: z.string().min(14, 'Insira um CNPJ válido').regex(new RegExp(/^([0-9]{2}[\.]?[0-9]{3}[\.]?[0-9]{3}[\/]?[0-9]{4}[-]?[0-9]{2})/), 'Valor do CNPJ inválido'),
  endereco: z.object({
    tipo: z.string().nonempty('Esse campo é obrigatório'),
    logradouro: z.string().nonempty('Esse campo é obrigatório').transform(capitalizeWord),
    numero: z.string().nonempty('Esse campo é obrigatório'),
    bairro: z.string().nonempty('Esse campo é obrigatório').transform(capitalizeWord),
    cidade: z.string().nonempty('Esse campo é obrigatório'),
    estado: z.string().nonempty('Esse campo é obrigatório'),
  }),
});

export const useInformation = (dados: informacoesProps) => {
  type TinformationsSchema = z.infer<typeof informationsSchema>;

  const {
    register,
    formState: { errors},
    handleSubmit,
  } = useForm<TinformationsSchema>({
    defaultValues: {
      projeto: dados?.projeto || '',
      proprietario: dados?.proprietario || '',
      cpf: dados?.cpf || '',
      razaoSocial: dados?.razaoSocial || '',
      cnpj: dados?.cnpj || '',
      endereco: {
        tipo: dados?.endereco.tipo || '',
        logradouro: dados?.endereco.logradouro || '' ,
        numero: dados?.endereco.numero || '',
        bairro: dados?.endereco.bairro || '',
        cidade: dados?.endereco.cidade || '',
        estado: dados?.endereco.estado || '',
      },
    },
    mode: 'onBlur',
    resolver: zodResolver(informationsSchema),
  });

  return {
    register,
    errors,
    handleSubmit,
  };

};

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

  function setDadosEdificação(key: string, value: string | number) {
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
  };
};
