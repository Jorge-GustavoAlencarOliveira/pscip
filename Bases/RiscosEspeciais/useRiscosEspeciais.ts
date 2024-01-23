import React from 'react';

export const useRiscosEspeciais = () => {

  const [listChecked, setListChecked] = React.useState<string[]>([]);
  const [existemRiscosEspeciais, setExistemRiscoEspeciais] = React.useState(true);

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
