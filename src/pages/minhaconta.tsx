import React from 'react'
import { DataStorage } from '../../dataContext'
import Layout from '../../Components/layout'

const Minhaconta = () => {
  const {user} = React.useContext(DataStorage)
  return (
    <>
      <Layout>
        <form>
           <div>
             
           </div>
        </form>
      </Layout> 
    </>
    
  )
}

export default Minhaconta
