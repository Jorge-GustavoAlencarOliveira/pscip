import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

export const UseFormSignUp = () => {

  const createUserSchema = z.object({
    email: z
      .string()
      .nonempty('O e-mail é obrigatório')
      .email('Formato de e-mail inválido')
      .toLowerCase(),
    password: z.string().nonempty('A senha é obrigatória').min(5, 'A senha precisa de no mínimo 5 caracteres'),
    confirmPassword: z.string(),
    name: z.string().nonempty('O nome é obrigatório')
    .transform(name => {
      return name.toLocaleLowerCase().trim().split(' ').map(word => {
        word.toLocaleLowerCase()
        return word[0].toLocaleUpperCase().concat(word.substring(1))
      }).join(' ')
    }),
    cpf: z.string().min(11, 'Insira um CNP inválido').regex(new RegExp(/^[0-9]{3}\.?[0-9]{3}\.?[0-9]{3}\-?[0-9]{2}/), 'Valor do CPF inválido')
  }).refine(fields => fields.password === fields.confirmPassword, {path: ['confirmPassword'], message: 'As senhas precisam ser iguais'});

  

  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting},
  } = useForm<CreateUserFormProps>({
    mode: 'onBlur',
    resolver: zodResolver(createUserSchema),
    defaultValues:{
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
      cpf: ''     
    }
  });

  type CreateUserFormProps = z.infer<typeof createUserSchema>;

  return {
    handleSubmit,
    register,
    errors,
    isSubmitting,
  };
};

export const UseFormSignIn = () =>{

  const UserSchema = z.object({
    email: z
      .string()
      .nonempty('O e-mail é obrigatório')
      .email('Formato de e-mail inválido')
      .toLowerCase(),
    password: z.string().nonempty('A senha é obrigatória').min(5, 'A senha precisa de no mínimo 5 caracteres'),
  })
  
  type UserFormProps = z.infer<typeof UserSchema>;

  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm<UserFormProps>({
    mode: 'all',
    resolver: zodResolver(UserSchema),
    defaultValues:{
      email: '',
      password: '',    
    }
  });

  return {
    handleSubmit,
    register,
    errors,
    isSubmitting,
  };
} 