import React from 'react'
import canSSRAuth from '../utils/canSSRAuth';

const BrigadaPage = () => {
  return (
    <div>
      
    </div>
  )
}

export default BrigadaPage

export const getServerSideProps = canSSRAuth(async () => {
  return {
    props: {},
  };
});