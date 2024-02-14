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
  modulos?.map((item) => {
    resultados.push(item?.resultado)
  })
  return resultados.sort((a,b) => a - b).reverse()
}

export const maioresModulos = (modulos: ModuloDeterministicoProps[]) => {
  const maioresValores = [...modulos].sort((a,b) => a.resultado - b.resultado).reverse()
  return [maioresValores[0], maioresValores[1]]
}

export function numberFormat (value: number){
  if(typeof value === 'number'){  
    const newNumber = new Intl.NumberFormat('pt-BR').format(
      value,
    )
    return (newNumber)
  }
  else return value
}