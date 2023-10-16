export function formatarNumero(value: string) {
  var v = value.replace(/\D/g,'');
  v = (+v/100).toFixed(2) + '';
  v = v.replace(".", ",");
  v = v.replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.');
  return v;
}

export function somenteInteiro (number: string){
  var v = number.replace(/\D/g,'');
  const numeroInteiro = Number(v.replace(',', '').replace(".",'')).toFixed(0)
  return numeroInteiro
}

export function cleanNumber (number: string){
  const updateNumber = Number(number.replace('.', '').replace(',',''))
  return updateNumber
}