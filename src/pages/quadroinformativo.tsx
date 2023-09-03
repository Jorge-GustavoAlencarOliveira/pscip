import React from 'react'
import Quadroinformativo from '../../QuadroInformativo/Quadroinformativo'
import Layout from '../../Components/layout'
import canSSRAuth from './utils/canSSRAuth'
interface MedidasProps{
  medidas: string
}

const QuadroinformativoPage = ({medidas}:MedidasProps) => {
  return (
    <>
      <Layout>
        <Quadroinformativo/>
      </Layout>
    </>
  )
}

export default QuadroinformativoPage


export const getServerSideProps = canSSRAuth(async () => {
  return {
    props: {}
  }
})