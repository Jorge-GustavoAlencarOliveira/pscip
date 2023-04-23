const Altura = (valor : number) => {
  const alturas = [12, 30, 54];
  if(valor <= alturas[0]) return 'baixo';
  if(valor > alturas[0] && valor <= alturas[1]) return 'media';
  if(valor > alturas[1] && valor <= alturas[2]) return 'alta';
  if(valor > alturas[2]) return 'muito';
}

export default Altura
