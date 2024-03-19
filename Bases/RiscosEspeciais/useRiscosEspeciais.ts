import React from 'react';

export const useRiscosEspeciais = (riscoEspeciais: string[]) => {
  const initialRiscosEspeciais = riscoEspeciais || []
  const [listChecked, setListChecked] = React.useState<string[]>(initialRiscosEspeciais);
  const [existemRiscosEspeciais, setExistemRiscoEspeciais] = React.useState(!(!!riscoEspeciais?.length));

  function handleChageExisteRisco (){
    setExistemRiscoEspeciais(risco => !risco)
    setListChecked([])
  }

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    if(event.target.checked) {
      setListChecked((items) => [...items, event.target.value])
    } else {
      setListChecked(listChecked.filter(item => item !== event.target.value))
    };
  }

  return { listChecked, handleChange, existemRiscosEspeciais, handleChageExisteRisco};
};
