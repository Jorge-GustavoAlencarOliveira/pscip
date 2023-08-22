import React from 'react'
import Result from '../result/result'

const MedidasSeguranca = ({isActive}:{isActive: boolean}) => {
  if(isActive)
  return (
    <>
      <Result/>
    </>
  )
  return null
}

export default MedidasSeguranca
