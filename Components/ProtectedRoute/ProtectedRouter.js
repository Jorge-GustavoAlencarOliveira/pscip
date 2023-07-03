import React from 'react'
import {useRouter} from 'next/router'
import { onAuthStateChanged, getAuth } from 'firebase/auth';
import { app } from '../../Firebase/firebaseConfig';

const ProtectedRoute = ({children}) => {
  const [loading, setLoading] = React.useState(true);
  const [signed, setSigned] = React.useState(false);
  const router = useRouter();
  const auth = getAuth(app)
  
  React.useEffect(() =>{
    async function checkLogin(){
      const unsub = onAuthStateChanged(auth, (user) =>{
        if(user){
          setLoading(false)
          setSigned(true)

        } else{
          setLoading(false)
          setSigned(false)
        }
      })
    }
    checkLogin()
  },[]);

  if(loading){
    return(
      <div className='container'></div>
      )
  }
    
  if(!signed){  
    router.push('/')
    return;
  }
    
     
  return children;
}

export default ProtectedRoute;
