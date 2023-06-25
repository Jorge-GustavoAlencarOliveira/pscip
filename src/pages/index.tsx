import React from 'react';
import Regioes from '../../Components/regiao';
import Ocupacao from '../../Components/ocupacao';

export default function Home() {
  const [separacao, setSeparacao] = React.useState<string>('');

  return (
    <>
      <div className='d-flex gap-2'>
        <span className='mr-2'>Existe separação entre edificações?</span>
        <div className='d-flex gap-1 align-items-center'>
          <input
            type="radio"
            id="separacaoSim"
            name="isolamento"
            value="separacaoSim"
            onChange={({ target }) => setSeparacao(target.value)}
            checked={separacao === 'separacaoSim'}
          />
          <label htmlFor="separacaoSim">Sim</label>
        </div>
        <div className='d-flex gap-1 align-items-center'>
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
      </div>
      <div>{separacao === 'separacaoNao' && <Ocupacao />}</div>
      <div>{separacao === 'separacaoSim' && <Regioes />}</div>
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

// import Head from 'next/head'
// import { DataStorage } from '../../../dataContext'
// import styles from '../home.module.css'
// import { useRouter } from 'next/router'
// const index = () => {
//   const router = useRouter();
//   const {allStates} = React.useContext(DataStorage)
//   const [alt, setAlt] = React.useState<string>('');
//   const [area, setarea] = React.useState<string>('');
//   const [tipo, setTipo] = React.useState<string>('existente');

//   function handleNext(){
//     allStates({altura: Number(alt), area: Number(area), dataConstrucao: tipo})
//     router.push('/informations/ocupacao')
//   }
//   return (
//     <>
//       <Head>
//         <title>Projeto de Segurança Contra Incêndio e Pânico</title>
//       </Head>
//       <div className={styles.form}>
//         <label>Altura</label>
//         <input
//           type="text"
//           placeholder="ex: 9.34 metros"
//           value={alt}
//           onChange={({ target }) => setAlt(target.value)}
//         />
//         <label>Área total</label>
//         <input
//           type="text"
//           placeholder="ex: 945.3 m²"
//           value={area}
//           onChange={({ target }) => setarea(target.value)}
//         />
//         <div className={styles.data}>
//           <h3>Data de construção</h3>
//           <div>
//             <input
//               type="radio"
//               name="construcao"
//               id="existente"
//               value="existente"
//               checked={tipo === 'existente'}
//               onChange={({ target }) => setTipo(target.value)}
//             />
//             <label htmlFor="existente">
//               Existente - Edificação Construída anterior a 2 de julho de 2005
//             </label>
//           </div>
//           <div>
//             <input
//               type="radio"
//               name="construcao"
//               id="construida"
//               value="construida"
//               checked={tipo === 'construida'}
//               onChange={({ target }) => setTipo(target.value)}
//             />
//             <label htmlFor="construida">
//               Construída - Edificação Construída entre 2 de julho de 2005 e 31
//               de dezembro de 2016
//             </label>
//           </div>
//           <div>
//             <input
//               type="radio"
//               name="construcao"
//               id="nova"
//               value="nova"
//               checked={tipo === 'nova'}
//               onChange={({ target }) => setTipo(target.value)}
//             />
//             <label htmlFor="nova">
//               Nova - Edificação Construída após 31 de dezembro de 2016
//             </label>
//           </div>
//         </div>
//         <button onClick={handleNext}>Próximo</button>
//       </div>
//     </>
//   )
// }

// export default index
