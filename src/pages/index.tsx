import React from 'react';
import Regioes from '../../Components/regiao';
import Ocupacao from '../../Components/ocupacao';

export default function Home() {
  
  const [separacao, setSeparacao] = React.useState<string>('');
    return (
    <>
      <div>
        <span>Existe separação entre edificações?</span>
        <br />
        <input
          type="radio"
          id="separacaoSim"
          name="isolamento"
          value="separacaoSim"
          onChange={({ target }) => setSeparacao(target.value)}
          checked={separacao === 'separacaoSim'}
        />
        <label htmlFor="separacaoSim">Sim</label>
        <input
          type="radio"
          id="separacaoNao"
          name="isolamento"
          value="separacaoNao"
          onChange={({ target }) => setSeparacao(target.value)}
          checked={separacao === 'separacaoNao'}
        />
        <label htmlFor="separacaoNao">Não</label>
      </div>
      <div>
        {separacao === 'separacaoNao' && (
          <Ocupacao/>
        )}
      </div>
      <div>
        {separacao === 'separacaoSim' && <Regioes/>}
      </div>
    </>
  );
}


//   React.useEffect(() => {
//     const local = localStorage.getItem('data');
//     if (local) {
//       const dados = JSON.parse(local);
//       const divi = divisao[select].map((item, index) => index);
//       const desc = descricao[select][div].map((item, index) => index);
//       setSelect(dados.select);
//       setDiv(divi[dados.div]);
//       setDesc(0);
//       setAlt(dados.alt);
//       setArea(dados.area);
//       setTipo(dados.tipo);
//     }
//   }, []);

//   React.useEffect(() =>{
//     setDiv(0);
//     setDesc(0)
//   },[select])

//   function handleNext() {
//     // baseData({
//     //   ocupacao: descricao[select][div][desc].divisao,
//     //   altura: alt,
//     //   area: area,
//     //   dataconstrucao: tipo,
//     //   cargaincendio: descricao[select][div][desc].cargaincendio,
//     // });
//     const dados = {
//       select,
//       div,
//       desc,
//       alt,
//       area,
//       tipo,
//     };
//     localStorage.setItem('data', JSON.stringify(dados));
//     router.push('/result');
//   }
