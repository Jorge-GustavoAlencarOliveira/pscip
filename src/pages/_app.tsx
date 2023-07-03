import type { AppProps } from 'next/app'
import DataConxtext  from '../../dataContext'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../pages/home.module.css'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useRouter } from 'next/router';

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter()
  return (
    <DataConxtext>
      <ToastContainer autoClose={3000} />
      <Component key={router.asPath} {...pageProps} />
    </DataConxtext>
  ) 
}
