import z from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { MateriaisDeterministicoProps, ModuloDeterministicoProps } from './useReducerDeterministico';
import { valorestabelac1 } from '../../CargaIncendio/TabelaDeterministico';

export const useDeterministico = () => {
  const deterministicoSchema = z.object({
    materias: z.array(
      z.object({
        tipo: z.string().nonempty({message: 'Esse campo é obrigatório'}),
        massa: z.string().nonempty({message: 'Esse campo é obrigatório'})
      })
    ),
    area: z.string().nonempty({message: 'Esse campo é obrigatório'})
  })

  type TdeterminiscoSchema = z.infer<typeof deterministicoSchema>;

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    control,
  } = useForm<TdeterminiscoSchema>({
    mode: 'onSubmit',
    resolver: zodResolver(deterministicoSchema),
  });

  return { register, handleSubmit, errors, reset, deterministicoSchema};
};


export const somasValores = (materiais: MateriaisDeterministicoProps[]) => {
  let somatorio: number[] = []
  materiais.map(({massa, tipo}) =>{
    let value = +massa * valorestabelac1[+tipo]
    somatorio.push(value)   
  })
  const valorFinal = somatorio.reduce((acc, currentValue) => {
     const value = acc + currentValue
     return value
  },0)
  return valorFinal
}

export const definicaoCargaIncendio = (modulos: ModuloDeterministicoProps[]) => {
  let resultados: number[] = []
  modulos.map(({resultado}) => {
    resultados.push(resultado)
  })
  return resultados.sort((a,b) => a - b).reverse()
}