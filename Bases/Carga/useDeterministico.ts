import z from 'zod';
import { useForm, useFieldArray } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { numberTratement } from '../Isolamento/useIsolamento';

export const useDeterministico = () => {
  const deterministicoSchema = z.object({
    modulos: z.array(
      z.object({
        material: z.string().nonempty({ message: 'Esse campo é obrigatório.' }),
        massa: z
          .string()
          .nonempty({ message: 'Esse campo é obrigatório.' })
          .transform(numberTratement),
        area: z
          .string()
          .nonempty({ message: 'Esse campo é obrigatório.' })
          .transform(numberTratement),
      }),
    ),
  });

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

  const {fields, append, remove} = useFieldArray({
    control,
    name: 'modulos',
  });

  return { register, handleSubmit, errors, reset, deterministicoSchema, fields, append, remove };
};
