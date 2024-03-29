import {GetServerSideProps, GetServerSidePropsContext, GetServerSidePropsResult} from 'next'
import {parseCookies} from 'nookies';

export default function canSSRGuest<P>(fn: GetServerSideProps<P>){
  return async (ctx: GetServerSidePropsContext): Promise<GetServerSidePropsResult<P>> => {
    const cookies = parseCookies(ctx);
    if(cookies['@pscip.token']){
      return{
        redirect:{
          destination: '/dashboard',
          permanent: false 
        }
      }
    }
    return await fn(ctx)
  }
}
