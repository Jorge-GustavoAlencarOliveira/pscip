import React from 'react'

const Area = (index: string, valor: number) => {
  if(index === 'A-2' || index === 'A-3'){
    if(valor <= 1200){
      return 'pts'
    } else{
      return 'pt'
    }
  }
  if(valor < 930){
    return 'pts'
  } else{
    return 'pt'
  }
}

export default Area
