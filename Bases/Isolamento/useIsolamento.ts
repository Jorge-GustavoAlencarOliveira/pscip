import z from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

export const useIsolamento = () => {
  const isolamentoSchema = z.object({
    risco1: z
      .object({
        nome: z.string().nonempty({ message: 'Esse campo é obrigatório.' }),
        maiorDimensao: z
          .string()
          .nonempty({ message: 'Esse campo é obrigatório.' })
          .transform(numberTratement),
        menorDimensao: z
          .string()
          .nonempty({ message: 'Esse campo é obrigatório.' })
          .transform(numberTratement),
        abertura: z
          .string()
          .nonempty({ message: 'Esse campo é obrigatório.' })
          .transform(numberTratement),
        cargaIncendio: z
          .string()
          .nonempty({ message: 'Esse campo é obrigatório.' })
          .transform(numberTratement),
        pavimentos: z.coerce
          .number({ invalid_type_error: 'Insira um número válido' })
          .min(1, { message: 'O valor inserido deve ser maior ou igual a 1' })
          .int({ message: 'Insira um número inteiro' }),
        unidadeAutonoma: z
          .string()
          .nonempty({ message: 'Esse campo é obrigatório.' }),
        compartimentacaohorizontal: z
          .string()
          .nonempty({ message: 'Esse campo é obrigatório.' }),
        compartimentacaovertical: z
          .string()
          .nonempty({ message: 'Esse campo é obrigatório.' }),
        parteFachada: z
          .string()
          .nonempty({ message: 'Esse campo é obrigatório.' }),
      })
      .refine(
        (value) =>
          !value.maiorDimensao.includes(',') &&
          !value.menorDimensao.includes(',') &&
          value.maiorDimensao !== '' &&
          value.menorDimensao !== '' &&
          +value?.abertura <= +value?.menorDimensao * +value?.maiorDimensao,
        {
          path: ['abertura'],
          message:
            'O somatório das aberturas deve ser sempre menor ou igual a área total da fachada',
        },
      ),
    risco2: z
      .object({
        nome: z.string().nonempty({ message: 'Esse campo é obrigatório.' }),
        maiorDimensao: z
          .string()
          .nonempty({ message: 'Esse campo é obrigatório.' })
          .transform(numberTratement),
        menorDimensao: z
          .string()
          .nonempty({ message: 'Esse campo é obrigatório.' })
          .transform(numberTratement),
        abertura: z
          .string()
          .nonempty({ message: 'Esse campo é obrigatório.' })
          .transform(numberTratement),
        cargaIncendio: z
          .string()
          .nonempty({ message: 'Esse campo é obrigatório.' })
          .transform(numberTratement),
        pavimentos: z.coerce
          .number({ invalid_type_error: 'Insira um número inteiro' })
          .min(1, { message: 'O valor inserido deve ser maior ou igual a 1' })
          .int({ message: 'Insira um número inteiro' }),
        unidadeAutonoma: z
          .string()
          .nonempty({ message: 'Esse campo é obrigatório.' }),
        compartimentacaohorizontal: z
          .string()
          .nonempty({ message: 'Esse campo é obrigatório.' }),
        compartimentacaovertical: z
          .string()
          .nonempty({ message: 'Esse campo é obrigatório.' }),
        parteFachada: z
          .string()
          .nonempty({ message: 'Esse campo é obrigatório.' }),
      })
      .refine(
        (value) =>
          !value.maiorDimensao.includes(',') &&
          !value.menorDimensao.includes(',') &&
          value.maiorDimensao !== '' &&
          value.menorDimensao !== '' &&
          +value?.abertura <= +value?.menorDimensao * +value?.maiorDimensao,
        {
          path: ['abertura'],
          message:
            'O somatório das aberturas deve ser sempre menor ou igual a área total da fachada',
        },
      ),
    Dprojeto: z
      .string()
      .nonempty({ message: 'Esse campo é obrigatório' })
      .transform(numberTratement),
    bombeiro: z.string().nonempty({ message: 'Esse campo é obrigatório' }),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TIsolamentoSchema>({
    defaultValues: {
      risco1: {
        nome: '',
        maiorDimensao: '',
        menorDimensao: '',
        abertura: '',
        cargaIncendio: '',
        unidadeAutonoma: 'Não',
        compartimentacaohorizontal: 'Não',
        compartimentacaovertical: 'Não',
        parteFachada: '',
      },
      risco2: {
        nome: '',
        maiorDimensao: '',
        menorDimensao: '',
        abertura: '',
        cargaIncendio: '',
        unidadeAutonoma: 'Não',
        compartimentacaohorizontal: 'Não',
        compartimentacaovertical: 'Não',
        parteFachada: '',
      },
      Dprojeto: '',
      bombeiro: '',
    },
    resolver: zodResolver(isolamentoSchema),
    mode: 'onSubmit',
  });

  type TIsolamentoSchema = z.infer<typeof isolamentoSchema>;

  return {
    handleSubmit,
    errors,
    register,
    isolamentoSchema,
  };
};

export function numberTratement(value: string) {
  if (value.includes(',')) {
    const newValue = Number(value.replace(/\D/g, '')) / 100;
    return newValue.toString();
  } else return value;
}
