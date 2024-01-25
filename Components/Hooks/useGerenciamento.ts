import React from "react";

export const useGerenciamento = () => {
  const status = [
    'Em elaboração',
    'Em análise',
    'Aprovado em análise',
    'Notificado em análise',
    'Vistoria solicitada',
    'Notificado em vistoria de liberação',
    'AVCB',
  ]
  const [statusSelect, setStatusSelect] = React.useState(0);

  const [observation, setObservation] = React.useState('');

  return {statusSelect, setStatusSelect, status, observation, setObservation}
   
}


