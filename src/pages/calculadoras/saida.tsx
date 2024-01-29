import React from 'react'
import canSSRAuth from '../utils/canSSRAuth';

const SaidaPage = () => {
  return (
    <div>
      saida de emergencia
    </div>
  )
}

export default SaidaPage

export const getServerSideProps = canSSRAuth(async () => {
  return {
    props: {},
  };
});