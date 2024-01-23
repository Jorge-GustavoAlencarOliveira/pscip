import React from 'react'

interface pageProps {
  isActive: boolean;
}

const GerenciamentoProjeto = ({ isActive }: pageProps) => {
  if(isActive)
  return (
    <div>
      Gerenciamento
    </div>
  )
  return null
}

export default GerenciamentoProjeto
