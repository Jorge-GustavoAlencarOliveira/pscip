import React, { Dispatch, SetStateAction } from 'react';
import styles from '../src/pages/home.module.css';
import { DataStorage } from '../dataContext';
import { useRouter } from 'next/router';

const tabelac1 = [
  'Acetileno',
  'Acetileno dissolvido',
  'Acetona',
  'Acrílico',
  'Açúcar',
  'Amido',
  'Algodão',
  'Álcool Alílico',
  'Álcool Amílico',
  'Álcool Etílico',
  'Álcool metílico',
  'Benzeno',
  'Benzina',
  'Celulose',
  'Biodiesel',
  'Borracha espuma',
  'Borracha em tiras',
  'Butano',
  'Cacau em pó',
  'Café',
  'Cafeína',
  'Cálcio',
  'Carbono',
  'Carvão',
  'Celulose',
  'Dietilcetona',
  'Dietileter',
  'Epóxi',
  'Etano',
  'Etanol',
  'Eteno',
  'Éter amílico',
  'Éter etílico',
  'Etileno',
  'Etino',
  'Enxofre',
  'Farinha de trigo',
  'Hexaptano',
  'Fenol',
  'Fibra sintética 6,6',
  'Fósforo',
  'Gás Natural',
  'Gasolina',
  'Glicerina',
  'Gordura e óleo vegetal',
  'Grãos',
  'Graxa, lubrificante',
  'Heptano',
  'Hexametileno',
  'Hexano',
  'Metanol',
  'Monóxido de carbono',
  'Nafta',
  'N-Butano',
  'Nitrocelulose',
  'N-Octano',
  'N-Pentano',
  'Óleo de linhaça',
  'Óleo vegetal',
  'Palha',
  'Papel',
  'Parafina',
  'Petróleo',
  'Plástico',
  'Poliacrilonitrico',
  'Policarbonato',
  'Poliéster',
  'Poliestireno',
  'Polietileno',
  'Polimetilmetacrilico',
  'Polioximetileno',
  'Poliuretano',
  'Polivinilclorido',
  'Polipropileno',
  'Propano',
  'Cereais',
  'C-Heptano',
  'C-Pentano',
  'C-Propano',
  'C-Hexano',
  'Chocolate',
  'Cloreto de polivinil',
  'Couro',
  'Creosoto/fenol',
  'D-glucose',
  'Diesel',
  'Dietilamina',
  'Hidreto de sódio',
  'Hidrogênio',
  'Hidreto de magnésio',
  'Látex',
  'Lã',
  'Leite em pó',
  'Linho',
  'Linóleo',
  'Lixo de cozinha',
  'Madeira',
  'Magnésio',
  'Manteiga',
  'Metano',
  'PVC',
  'Resina de fenol',
  'Resina de uréia',
  'Resina melamínica',
  'Seda',
  'Sisal',
  'Sódio',
  'Sulfureto de carbono',
  'Tabaco',
  'Tolueno',
  'Turfa',
  'Ureia (ver também resina de ureia)',
  'Viscose',
];

const valorestabelac1 = [
  50, 17, 30, 28, 17, 17, 18, 34, 42, 25, 21, 40, 42, 16, 39, 37, 32, 46, 17,
  17, 21, 4, 34, 36, 16, 34, 37, 34, 47, 26, 50, 42, 34, 50, 48, 8.4, 17, 46,
  34, 29, 25, 26, 47, 17, 42, 17, 41, 46, 46, 46, 19, 10, 42, 45, 8, 44, 45, 37,
  42, 16, 17, 46, 41, 31, 30, 29, 31, 39, 44, 24, 15, 23, 16, 43, 46, 17, 46,
  46, 50, 46, 25, 17, 21, 19, 37, 15, 43, 42, 9, 143, 17, 44, 23, 17, 17, 2, 18,
  19, 25, 37, 50, 17, 25, 21, 18, 19, 17, 4.5, 12.5, 17, 42, 34, 9, 17,
];

interface moduloProps {
  numero: number;
  modulos: number[];
  modulo: number[];
  setModulo: Dispatch<SetStateAction<number[]>>;
  setModulos: Dispatch<SetStateAction<number[]>>;
  final: Dispatch<SetStateAction<number>>;
  media: Dispatch<SetStateAction<number>>;
  setValorFinal: Dispatch<SetStateAction<number>>
}

const Modulo = ({
  numero,
  modulo,
  setModulo,
  setModulos,
  modulos,
  final,
  media,
  setValorFinal
}: moduloProps) => {
  const [mat, setMat] = React.useState<number | string>(0);
  const [area, setArea] = React.useState('');
  const [massa, setMassa] = React.useState('');
  const [valor, setValor] = React.useState<number>(0);

  function handleDelete(numero: number) {
    setModulo(modulo.filter((item, index) => index !== numero));
    setModulos(modulos.filter((item) => item !== modulos[numero]));
    media(0);
    final(0);
    setValorFinal(0)
  }
  function handleCalcular(numero: number) {
    if (area === '' || massa === '') {
      return;
    }
    let carga = (valorestabelac1[Number(mat)] * Number(massa)) / Number(area);
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
            {tabelac1.map((item, index) => {
              return (
                <option key={index} value={index}>
                  {item}
                </option>
              );
            })}
          </select>
          <span>Massa:</span>
          <input
            type="text"
            value={massa}
            onChange={({ target }) => setMassa(target.value)}
            placeholder="Kg"
          />
          <span>Area:</span>
          <input
            type="text"
            value={area}
            onChange={({ target }) => setArea(target.value)}
            placeholder="metros"
          />
          <button onClick={() => handleCalcular(numero)}>Calcular</button>
          {valor !== 0 && <h2>Carga Incêndio: {valor.toFixed(2)} MJ/m²</h2>}
        </div>
      </div>
    </>
  );
};

const Deterministico = () => {
  const {setValoresOcupacao} = React.useContext(DataStorage)
  const router = useRouter();
  const [count, setCount] = React.useState<number>(1);
  const [modulo, setModulo] = React.useState<Array<number>>([0]);
  const [modulos, setModulos] = React.useState<Array<number>>(
    new Array(modulo.length).fill(0),
  );
  const [final, setFinal] = React.useState<number>(0);
  const [mediaf, setMediaf] = React.useState<number>(0);
  const [valorFinal, setValorFinal] = React.useState<number>(0);

  function handleAdicionar() {
    setCount((item) => item + 1);
    setModulo((item) => [...item, count]);
    setValorFinal(0)
  }
  function sortFunction(a: any, b: any) {
    return a - b;
  }
  function handleCargaFinal() {
    let modulosB = [...modulos];
    let media = modulosB.sort(sortFunction).reverse();
    let mediafinal = (media[0] + media[1]) / 2;
    let cargafinal = Math.max(...modulos) * 0.85;
    setFinal(+cargafinal.toFixed(2));
    setMediaf(+mediafinal.toFixed(2));
  }

  function handleFinalizar() {
    if(modulos.length === 1){
      if (modulos[0] <= 300) {
       
        setValorFinal(1);
      }
      if (modulos[0] > 300 && modulos[0] <= 1200) {
        setValorFinal(2);
      }
      if (modulos[0] > 1200) {
        setValorFinal(3);
      }
    } else{
      let cargaIncendioFinal = Math.max(final, mediaf);
      if (cargaIncendioFinal <= 300) {
        setValorFinal(1);
      }
      if (cargaIncendioFinal > 300 && cargaIncendioFinal <= 1200) {
        setValorFinal(2);
      }
      if (cargaIncendioFinal > 1200) {
        setValorFinal(3);
      }
    }
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
            final={setFinal}
            media={setMediaf}
            setModulos={setModulos}
            setValorFinal={setValorFinal}
          />
        );
      })}
      {modulo.length > 1 && (
        <button onClick={handleCargaFinal}>
          Calcular carga incêndio total
        </button>
      )}
      {final !== 0 && (
        <h2>
          85 % da maior carga de incêndio encontrada: {final.toFixed(2)} MJ/m²
        </h2>
      )}
      {mediaf !== 0 && (
        <h2>
          Média das duas maiores carga incêndio encontradas: {mediaf.toFixed(2)}{' '}
          MJ/m²
        </h2>
      )}
      <button onClick={handleFinalizar}>Finalizar Dimensionamento</button>
      {valorFinal === 1 && (
        <div>
          <p>Divisão: J-2</p>
          <p>
            Descrição: Depósitos e similares com carga de incêndio baixa
          </p>
        </div>
      )}
      {valorFinal === 2 && (
        <div>
          <p>Divisão: J-3</p>
          <p>
            Descrição: Depósitos e similares com carga de incêndio média
          </p>
        </div>
      )}
      {valorFinal === 3 && (
        <div>
          <p>Divisão: J-4</p>
          <p>
            Descrição: Depósitos e similares com carga de incêndio alta
          </p>
        </div>
      )}
    </div>
  );
};

export default Deterministico;
