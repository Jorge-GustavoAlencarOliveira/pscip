import React, { Dispatch, SetStateAction } from 'react';
import { ReactNode } from 'react';
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  User,
  signOut,
  onAuthStateChanged,
} from 'firebase/auth';
import { app } from './Firebase/firebaseConfig';
import { toast } from 'react-toastify';
import { useRouter } from 'next/router';

const provider = new GoogleAuthProvider();

const auth = getAuth(app);

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
  setValoresOcupacao: Dispatch<SetStateAction<Array<array>>>;
  signInGoogle: () => Promise<void>;
  userLogout: () => Promise<void>;
  login: boolean;
  data: User | null;
  signed: boolean;
};

type array = [dadosProps, number[][]];

type ProviderProps = {
  children: ReactNode;
};
export const DataStorage = React.createContext({} as ContextData);

const DataContext = ({ children }: ProviderProps) => {
  const router = useRouter();
  const [data, setData] = React.useState<User | null>(null);
  const [login, setLogin] = React.useState(false);
  const [valoresOcupacao, setValoresOcupacao] = React.useState<array[]>([
    [
      {
        areaConstruida: '',
        areaAconstruir: '',
        altura: '',
        pavimentos: '',
        areaTotal: 0,
        dataConstrucao: '',
        compartimentacao: '',
      },
      [],
    ],
  ]);

  async function signInGoogle() {
    await signInWithPopup(auth, provider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        if (credential) {
          const token = credential.accessToken;
          const user = result.user;
          toast.success('Usuário logado com sucesso');
          setData(user);
          setLogin(true);
          router.push('/dashboard');
          localStorage.setItem('userPSCIP', JSON.stringify({ token: token }));
        }
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        const email = error.customData.email;
        const credential = GoogleAuthProvider.credentialFromError(error);
        toast.error('Login e senha inválidos');
      });
  }

  React.useEffect(() => {
    async function checkLogin() {
      onAuthStateChanged(auth, (user) => {
        if (user) {
          setData(user);
          setLogin(true);
        } else {
          setLogin(false);
        }
      });
    }
    checkLogin();
  }, []);

  async function userLogout() {
    await signOut(auth);
    setLogin(false);
    setData(null);
    localStorage.clear();
    toast.info('Usuário deslogado');
  }

  return (
    <DataStorage.Provider
      value={{
        signed: !!data,
        valoresOcupacao,
        setValoresOcupacao,
        signInGoogle,
        userLogout,
        login,
        data,
      }}
    >
      {children}
    </DataStorage.Provider>
  );
};

export default DataContext;
