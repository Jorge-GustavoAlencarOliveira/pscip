import React, {ReactNode} from 'react';
// import {
//   getAuth,
//   signInWithPopup,
//   GoogleAuthProvider,
//   User,
//   signOut,
//   onAuthStateChanged,
// } from 'firebase/auth';
// import { app } from './Firebase/firebaseConfig';
import { toast } from 'react-toastify';
import Router, { useRouter } from 'next/router';
import { destroyCookie, parseCookies, setCookie } from 'nookies';
import { setupAPIClient } from '@/services/api';
import { informacoesProps } from './Components/Hooks/useDados';

// const provider = new GoogleAuthProvider();

// const auth = getAuth(app);

interface dadosProps {
  areaConstruida: string;
  areaAconstruir: string;
  altura: string;
  pavimentos: string;
  areaTotal: number;
  dataConstrucao: string;
  compartimentacao: string;
}

type ContextData = {
  valoresOcupacao: Array<array>;
  // signInGoogle: () => Promise<void>;
  // userLogout: () => Promise<void>;
  login: boolean;
  // data: User | null;
  // signed: boolean;
  valoresOcupacoes: (dados: dadosProps, ocupacoes: number[][]) => void;
  valoresRegiao: (valorRegiao: Array<array>) => void;
  user: UserProps;
  isAuthenticated: boolean;
  userLogin: (credentials: LoginProps) => void;
  userSignUp: (credentials: SignUpProps) => void;
  userSignOut: () => void;
  informations: informacoesProps;
  valoresInformacoes: (credentials: informacoesProps) => void
};

interface SubscriptionsProps {
  id: string;
  status: string;
  priceId: string;
}

interface UserProps {
  id: string;
  name: string;
  email: string;
  cpf: string;
  endereco?: string;
  subscriptions?: SubscriptionsProps;
}

interface LoginProps {
  email: string;
  password: string
}

interface SignUpProps{
  name: string;
  email: string;
  password: string;
  cpf: string
}

export type array = [dadosProps, number[][]];

type ProviderProps = {
  children: ReactNode;
};

export const Logout =  () => {
  try{
    destroyCookie(null, '@pscip.token', {path: '/'});
    Router.push('/login/signin')
  }catch(err){
    toast.error('Erro ao deslogar')
  }
}
export const DataStorage = React.createContext({} as ContextData);

const DataContext = ({ children }: ProviderProps) => {
  const router = useRouter();
  const [user, setUser] = React.useState<UserProps>();
  const isAuthenticated = !!user
  // const [data, setData] = React.useState<User>();
  const [login, setLogin] = React.useState(false);
  const [valoresOcupacao, setValoresOcupacao] = React.useState<array[]>();
  const [informations, setInformations] = React.useState<informacoesProps>()
  function valoresOcupacoes(dados: dadosProps, ocupacoes: number[][]) {
    setValoresOcupacao([[dados, ocupacoes]]);
  }
  function valoresRegiao(valorRegiao: Array<array>) {
    setValoresOcupacao(valorRegiao);
  }
  function valoresInformacoes (informacoes: informacoesProps){
    setInformations(informacoes)
  }


  React.useEffect(() =>{
    async function checkLogin () {
      const {'@pscip.token': token} = parseCookies()
      if(token){
        const api = setupAPIClient()
        await api.get('/me').then(response => {
          const {id, name, endereco, email, subscriptions, cpf} = response.data
          setUser({
            id,
            email, 
            name,
            cpf,
            endereco,
            subscriptions
          })
        })
        .catch((err) => {
          toast.error('Usuário deslogado')
          Logout()
        })
      }
    }
    checkLogin()
  },[])

  

  const userLogin = async ({ email, password }: LoginProps) => {
    try{
      const api = setupAPIClient()
      const response = await api.post('/session', {
        email,
        password
      })
      const {id, name, token, subscriptions, endereco, cpf} = response.data;
      setCookie(undefined, '@pscip.token', token, {
        maxAge: 60*60*24*30,
        path: '/'
      })
      setUser({
        id, name, email, endereco, cpf, subscriptions
      })
      api.defaults.headers.common['Authorization'] = `Bearer ${token}`
      toast.success("Usuário logado com sucesso")
      Router.push('/dashboard')
    }catch(err){
       toast.error('Usuário ou senha inválido')
    }
  };
   
  const userSignOut = async () => {
    try{
      destroyCookie(null, '@pscip.token', {path: '/'});
      setUser(null)
      setLogin(false)
      Router.push('/')
      toast.info('Usuário deslogado');
    }catch(err){
      toast.error("Erro ao deslogar")
      throw new Error ("Erro ao deslogar");
    }
  }
   
  const userSignUp = async ({name, email, password, cpf}:SignUpProps) => {
    try{
      const api = setupAPIClient()
      await api.post('/users', {
        name, 
        email,
        password,
        cpf
      })
      toast.success("Usuário cadastrado")
      Router.push('/login/signin')
    }catch(err){
      toast.error("Erro ao cadastrar")
      throw new Error('Erro ao cadastrar')
    }
  }

  return (
    <DataStorage.Provider
      value={{
        user,
        isAuthenticated,
        userLogin,
        userSignUp,
        userSignOut,
        // signed: !!data,
        valoresOcupacao,
        // signInGoogle,
        // userLogout,
        login,
        // data,
        valoresOcupacoes,
        valoresRegiao,
        valoresInformacoes,
        informations
      }}
    >
      {children}
    </DataStorage.Provider>
  );
};

export default DataContext;

  // async function signInGoogle() {
  //   await signInWithPopup(auth, provider)
  //     .then((result) => {
  //       const credential = GoogleAuthProvider.credentialFromResult(result);
  //       if (credential) {
  //         const token = credential.accessToken;
  //         const user = result.user;
  //         toast.success('Usuário logado com sucesso');
  //         setData(user);
  //         setLogin(true);
  //         router.push('/dashboard');
  //         localStorage.setItem('userPSCIP', JSON.stringify({ token: token }));
  //       }
  //     })
  //     .catch((error) => {
  //       const errorCode = error.code;
  //       const errorMessage = error.message;
  //       const email = error.customData.email;
  //       const credential = GoogleAuthProvider.credentialFromError(error);
  //       toast.error('Login e senha inválidos');
  //     });
  // }

  // React.useEffect(() => {
  //   async function checkLogin() {
  //     onAuthStateChanged(auth, (user) => {
  //       if (user) {
  //         console.log(user)
  //         setData(user);
  //         setLogin(true);
  //       } else {
  //         setLogin(false);
  //       }
  //     });
  //   }
  //   checkLogin();
  // }, []);

  // async function userLogout() {
  //   await signOut(auth);
  //   setLogin(false);
  //   setData(null);
  //   localStorage.clear();
  //   toast.info('Usuário deslogado');
  // }