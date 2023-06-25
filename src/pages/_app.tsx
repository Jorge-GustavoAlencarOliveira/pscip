import type { AppProps } from 'next/app'
import DataConxtext  from '../../dataContext'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../pages/home.module.css'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <DataConxtext>
      <Component {...pageProps} />
    </DataConxtext>
  ) 
}
