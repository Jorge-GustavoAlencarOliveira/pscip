const Altura = (valor : number) => {
  if(valor <= 12) return 'baixo';
  if(valor > 12 && valor <= 32) return 'media';
  if(valor > 32 && valor <= 54) return 'alta';
  if(valor > 54) return 'muito';
}

export default Altura
