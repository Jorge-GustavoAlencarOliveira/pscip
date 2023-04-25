import type { AppProps } from 'next/app'
import DataConxtext  from '../../dataContext'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <DataConxtext>
      <Component {...pageProps} />
    </DataConxtext>
  ) 
}
