import React, { Dispatch, SetStateAction } from 'react';
import styles from '../src/pages/home.module.css';

const tabela1 = [
  'Açúcar',
  'Açúcar (produtos de:)',
  'Acumuladores/baterias',
  'Adubos químicos',
  'Alcatrão',
  'Algodão',
  'Alimentação (alimentos industrializados)',
  'Aparelhos eletroeletrônicos',
  'Aparelhos fotográficos',
  'Bebidas alcoólicas',
  'Borracha',
  'Artigos de borracha',
  'Brinquedos',
  'Cabos elétricos',
  'Cacau produtos de:',
  'Café cru',
  'Caixas de madeira',
  'Calçado',
  'Celuloide',
  'Cera',
  'Cera, artigos de:',
  'Chocolate',
  'Colas combustíveis',
  'Colchões não sintéticos',
  'Cosméticos',
  'Couro',
  'Couro, artigos de:',
  'Couro sintético',
  'Couro sintético, artigos de:',
  'Depósitos de mercadorias incombustíveis em pilhas de caixas de madeira ou de papelão',
  'Depósitos de mercadorias incombustíveis em pilhas de caixa de plástico',
  'Depósitos    de    mercadorias    incombustíveis    em estantes metálicas (sem embalagem)',
  'Depósitos de paletes de madeira',
  'Espumas sintéticas',
  'Espumas sintéticas, artigos de:',
  'Farinha em sacos',
  'Feltro',
  'Feno, fardos de:',
  'Fiação, produtos de fio',
  'Fiação, produtos de lã',
  'Fósforos',
  'Gorduras',
  'Gorduras comestíveis',
  'Grãos, sementes',
  'Instrumentos de ótica',
  'Legumes, verduras, hortifrutigranjeiros',
  'Leite em pó',
  'Lenha',
  'Madeira em troncos',
  'Madeira, aparas',
  'Madeira, restos de:',
  'Madeira, vigas e tábuas',
  'Malte',
  'Massas alimentícias',
  'Materiais de construção',
  'Materiais sintéticos',
  'Material de escritório',
  'Medicamentos, embalagem',
  'Móveis de madeira',
  'Móveis, estofados sem espuma sintética',
  'Painel de madeira aglomerada',
  'Papel',
  'Papel prensado',
  'Papelaria, estoque',
  'Produtos farmacêuticos, estoque',
  'Peças automotivas',
  'Perfumaria',
  'artigos de:',
  'Pneus',
  'Portas de madeira',
  'Produtos químicos combustíveis',
  'Queijos',
  'Resinas sintéticas',
  'Resinas sintéticas',
  'placas de: Sabão',
  'Sacos de papel',
  'Sacos de plástico',
  'Tabaco em bruto',
  'Tabaco, artigos de:',
  'Tapeçarias',
  'Tecidos em geral',
  'Tecidos sintéticos',
  'Tecidos,fardos de algodão',
  'Velas de cera',
  'Vernizes',
  'Vernizes de cera',
];

const tabela2 = [
  3780,
  360,
  360,
  90,
  1530,
  585,
  1530,
  180,
  270,
  360,
  12870,
  2250,
  360,
  270,
  2610,
  1305,
  270,
  180,
  1530,
  1530,
  945,
  1530,
  1530,
  2250,
  248,
  765,
  270,
  765,
  360,
  90,
  90,
  9,
  1530,
  1125,
  360,
  3780,
  360,
  450,
  765,
  855,
  360,
  8100,
  8505,
  360,
  90,
  158,
  4050,
  1125,
  2835,
  945,
  1350,
  1890,
  6030,
  765,
  360,
  2655,
  585,
  360,
  360,
  180,
  3015,
  945,
  495,
  360,
  360,
  225,
  810,
  810,
  450,
  1125,
  1890,
  1530,
  1890,
  5670,
  11340,
  765,
  945,
  765,
  585,
  585,
  450,
  450,
  10080,
  1125,
  2250,
];

interface moduloProps {
  numero: number;
  modulo: number[];
  setModulo: Dispatch<SetStateAction<number[]>>;
  setFinal: Dispatch<SetStateAction<number>>;
  modulos: number[];
}

const Modulo = ({
  numero,
  modulo,
  setModulo,
  modulos,
  setFinal,
}: moduloProps) => {
  const [mat, setMat] = React.useState<number | string>(0);
  const [altura, setAltura] = React.useState('');
  const [valor, setValor] = React.useState<number>(0);

  function handleDelete(numero: number) {
    setModulo(modulo.filter((item, index) => index !== numero));
    modulos[numero] = 0;
    setFinal(0);
  }

  function handleCalcular(numero: number) {
    if (altura === '') {
      return;
    }
    let carga = tabela2[Number(mat)] * Number(altura);
    setValor(carga);
    modulos[numero] = carga;
  }

  return (
    <>
      <div className={styles.modulo}>
        <span>Modulo {numero + 1} </span>
        {numero !== 0 && (
          <button onClick={() => handleDelete(numero)}>Apagar</button>
        )}
        <div className={styles.proba}>
          <span>Material:</span>
          <select onChange={({ target }) => setMat(target.value)}>
            {tabela1.map((item, index) => {
              return (
                <option key={index} value={index}>
                  {item}
                </option>
              );
            })}
          </select>
          <span>Altura:</span>
          <input
            type="text"
            value={altura}
            onChange={({ target }) => setAltura(target.value)}
            placeholder="metros"
          />
          <button onClick={() => handleCalcular(numero)}>Calcular</button>
          {valor !== 0 && <h2>Carga Incêndio: {valor.toFixed(2)} MJ/m²</h2>}
        </div>
      </div>
    </>
  );
};

const Probabilistico = () => {
  const [count, setCount] = React.useState<number>(1);
  const [modulo, setModulo] = React.useState<Array<number>>([0]);
  const [modulos, setModulos] = React.useState<Array<number>>(
    new Array(modulo.length).fill(0),
  );
  const [final, setFinal] = React.useState<number>(0);

  let i = 1;
  function handleAdicionar() {
    setCount((item) => item + 1);
    setModulo((item) => [...item, count]);
  }

  function handleCargaFinal() {
    let cargafinal = Math.max(...modulos);
    setFinal(cargafinal);
  }

  return (
    <div className={styles.proba}>
      <div>
        <button onClick={handleAdicionar}>Adicionar modulo</button>
      </div>
      {modulo.map((item, index) => {
        return (
          <Modulo
            key={item}
            numero={Number(index)}
            modulo={modulo}
            setModulo={setModulo}
            modulos={modulos}
            setFinal={setFinal}
          />
        );
      })}
      {modulo.length > 1 && (
        <button onClick={handleCargaFinal}>
          Calcular carga incêndio total
        </button>
      )}
      {final !== 0 && <h2>Carga incêndio Final: {final.toFixed(2)} MJ/m²</h2>}
    </div>
  );
};

export default Probabilistico;
