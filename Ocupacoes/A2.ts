import { edificacaoExistente } from '../Bases/edificacaoExistente';
import { cleanNumber } from '../Bases/formatarNumero';
const medidas = [
  'Acesso de viaturas',
  'Segurança Estrutural contra Incêndio',
  'Compartimentação Vertical',
  'Saídas de Emergencia',
  'Brigada de Incêndio',
  'Iluminação de Emergência',
  'Alarme de Incêndio',
  'Sinalização de Emergência',
  'Extintores',
  'Hidrantes e Mangotinhos',
  'Controle de Materiais de Acabamento e de Revestimento',
];

interface a1Props {
  altura: number;
  area: string;
  cargaIncendio: number;
  isolamento: number;
  construcao: string;
}

const A2 = ({
  altura,
  area,
  cargaIncendio,
  isolamento,
  construcao,
}: a1Props) => {
  const userAltura = Number(altura);
  const userArea = cleanNumber(area)/100;


  function showMedidas() {
    if (userAltura <= 12 && userArea <= 1200) {
      const medFinal = [
        'Saídas de Emergencia',
        'Iluminação de Emergência',
        'Sinalização de Emergência',
        'Extintores',
      ];
      return edificacaoExistente(medFinal, construcao);
    }

    if (userAltura <= 12 && userArea > 1200) {
      const medFinal = [
        'Acesso de viaturas (nos condomínios com arruamento interno, independente da área)',
        'Saídas de Emergencia',
        'Iluminação de Emergência',
        'Sinalização de Emergência',
        'Extintores',
        'Hidrantes e Mangotinhos',
        'Controle de Materiais de Acabamento e de Revestimento (nos salões de festas e auditórios com previsão de população superior a 200 pessoas)',
      ];
      return edificacaoExistente(medFinal, construcao);
    }
    if (userAltura > 12 && userAltura <= 30) {
      const medFinal = [
        'Acesso de viaturas',
        'Segurança Estrutural contra Incêndio',
        'Saídas de Emergencia',
        'Iluminação de Emergência',
        'Sinalização de Emergência',
        'Extintores',
        'Hidrantes e Mangotinhos',
        'Controle de Materiais de Acabamento e de Revestimento',
      ];
      return edificacaoExistente(medFinal, construcao);
    }
    if (userAltura > 30 && userAltura <= 54) {
      const medFinal = [
        'Acesso de viaturas',
        'Segurança Estrutural contra Incêndio',
        'Compartimentação Vertical',
        'Saídas de Emergencia',
        'Iluminação de Emergência',
        'Alarme de Incêndio',
        'Sinalização de Emergência',
        'Extintores',
        'Hidrantes e Mangotinhos',
        'Controle de Materiais de Acabamento e de Revestimento',
      ];
      return edificacaoExistente(medFinal, construcao);
    }
    if (userAltura > 54) {
      const medFinal = [
        'Acesso de viaturas',
        'Segurança Estrutural contra Incêndio',
        'Compartimentação Vertical',
        'Saídas de Emergencia',
        'Brigada de Incêndio',
        'Iluminação de Emergência',
        'Alarme de Incêndio',
        'Sinalização de Emergência',
        'Extintores',
        'Hidrantes e Mangotinhos',
        'Controle de Materiais de Acabamento e de Revestimento',
      ];
      return edificacaoExistente(medFinal, construcao);
    }
  }

  // function showMedidas() {
  //   if (userAltura <= 12 && userArea <= 1200) {
  //     const medFinal = [
  //       'Saídas de Emergencia',
  //       'Iluminação de Emergência',
  //       'Sinalização de Emergência',
  //       'Extintores',
  //     ];
  //     setMediaFinal(medFinal);
  //   }
  //   if (userAltura <= 12 && userArea <= 1200 && cond === 'sim') {
  //     const medFinal = [
  //       'Acesso de viaturas',
  //       'Saídas de Emergencia',
  //       'Iluminação de Emergência',
  //       'Sinalização de Emergência',
  //       'Extintores',
  //     ];
  //     setMediaFinal(edificacaoExistente(medFinal));
  //   }
  //   if (
  //     userAltura <= 12 &&
  //     userArea <= 1200 &&
  //     salao === 'sim' &&
  //     cond === 'nao'
  //   ) {
  //     const medFinal = [
  //       'Saídas de Emergencia',
  //       'Iluminação de Emergência',
  //       'Sinalização de Emergência',
  //       'Extintores',
  //       'Controle de Materiais de Acabamento e de Revestimento (nos salões de festas e auditórios com previsão de população superior a 200 pessoas)',
  //     ];
  //     setMediaFinal(medFinal);
  //   }
  //   if (
  //     userAltura <= 12 &&
  //     userArea <= 1200 &&
  //     salao === 'sim' &&
  //     cond === 'sim'
  //   ) {
  //     const medFinal = [
  //       'Acesso de viaturas',
  //       'Saídas de Emergencia',
  //       'Iluminação de Emergência',
  //       'Sinalização de Emergência',
  //       'Extintores',
  //       'Controle de Materiais de Acabamento e de Revestimento (nos salões de festas e auditórios com previsão de população superior a 200 pessoas)',
  //     ];
  //     setMediaFinal(edificacaoExistente(medFinal));
  //   }
  //   if (
  //     userAltura <= 12 &&
  //     userArea <= 1200 &&
  //     salao === 'nao' && cond === 'sim'
  //   ) {
  //     const medFinal = [
  //       'Acesso de viaturas',
  //       'Saídas de Emergencia',
  //       'Iluminação de Emergência',
  //       'Sinalização de Emergência',
  //       'Extintores',
  //     ];
  //     setMediaFinal(edificacaoExistente(medFinal));
  //   }
  //   if (userAltura <= 12 && userArea > 1200) {
  //     const medFinal = [
  //       'Acesso de viaturas',
  //       'Saídas de Emergencia',
  //       'Iluminação de Emergência',
  //       'Sinalização de Emergência',
  //       'Extintores',
  //       'Hidrantes e Mangotinhos',
  //     ];
  //     setMediaFinal(edificacaoExistente(medFinal));
  //   }
  //   if (userAltura <= 12 && userArea > 1200 && salao === 'sim') {
  //     const medFinal = [
  //       'Acesso de viaturas',
  //       'Saídas de Emergencia',
  //       'Iluminação de Emergência',
  //       'Sinalização de Emergência',
  //       'Extintores',
  //       'Hidrantes e Mangotinhos',
  //       'Controle de Materiais de Acabamento e de Revestimento (nos salões de festas e auditórios com previsão de população superior a 200 pessoas)',
  //     ];
  //     setMediaFinal(edificacaoExistente(medFinal));
  //   }
  //   if (userAltura > 12 && userAltura <= 30) {
  //     const medFinal = [
  //       'Acesso de viaturas',
  //       'Segurança Estrutural contra Incêndio',
  //       'Saídas de Emergencia',
  //       'Iluminação de Emergência',
  //       'Sinalização de Emergência',
  //       'Extintores',
  //       'Hidrantes e Mangotinhos',
  //       'Controle de Materiais de Acabamento e de Revestimento',
  //     ];
  //     setMediaFinal(edificacaoExistente(medFinal));
  //   }
  //   if (userAltura > 30 && userAltura <= 54) {
  //     const medFinal = [
  //       'Acesso de viaturas',
  //       'Segurança Estrutural contra Incêndio',
  //       'Compartimentação Vertical',
  //       'Saídas de Emergencia',
  //       'Iluminação de Emergência',
  //       'Alarme de Incêndio',
  //       'Sinalização de Emergência',
  //       'Extintores',
  //       'Hidrantes e Mangotinhos',
  //       'Controle de Materiais de Acabamento e de Revestimento',
  //     ];
  //     setMediaFinal(edificacaoExistente(medFinal));
  //   }
  //   if (userAltura > 54) {
  //     const medFinal = [
  //       'Acesso de viaturas',
  //       'Segurança Estrutural contra Incêndio',
  //       'Compartimentação Vertical',
  //       'Saídas de Emergencia',
  //       'Brigada de Incêndio',
  //       'Iluminação de Emergência',
  //       'Alarme de Incêndio',
  //       'Sinalização de Emergência',
  //       'Extintores',
  //       'Hidrantes e Mangotinhos',
  //       'Controle de Materiais de Acabamento e de Revestimento',
  //     ];
  //     setMediaFinal(edificacaoExistente(medFinal));
  //   }
  // }
  // showMedidas()
  return showMedidas();
};

export default A2;

// const [medFinal, setMediaFinal] = React.useState<string[]>([]);
// const [cond, setCond] = React.useState<string>('nao');
// const [salao, setSalao] = React.useState<string>('nao');

// React.useEffect(() => {
//   showMedidas()
// }, [ ,cond, salao]);

{
  /* <div>
      {userAltura <= 12 && userArea <= 1200 && construcao !== "Existente" && (
        <div>
          <span>Trata-se de condomínio com arruamento interno?</span>
          <input
            type="radio"
            id="simPossui"
            value="sim"
            checked={cond === 'sim'}
            onChange={({ target }) => setCond(target.value)}
          />
          <label htmlFor="simPossui">Sim</label>
          <input
            type="radio"
            id="naoPossui"
            value="nao"
            checked={cond === 'nao'}
            onChange={({ target }) => setCond(target.value)}
            required
          />
          <label htmlFor="naoPossui">Não</label>
        </div>
      )}
      {userAltura <= 12 && (
        <div>
          <span>
            Possui salões de festas e auditórios com previsão de população
            superior a 200 pessoas?
          </span>
          <input
            type="radio"
            id="simPossuiS"
            value="sim"
            checked={salao === 'sim'}
            onChange={({ target }) => setSalao(target.value)}
          />
          <label htmlFor="simPossuiS">Sim</label>
          <input
            type="radio"
            id="naoPossuiS"
            value="nao"
            checked={salao === 'nao'}
            onChange={({ target }) => setSalao(target.value)}
          />
          <label htmlFor="naoPossuiS">Não</label>
        </div>
      )}
      {medFinal.length != 0 && (
        <div>
          <br />
          <ul>
            {medFinal.map((item) => {
              const link = item
                .replaceAll(' ', '')
                .replace('ç', 'c')
                .replace('ã', 'a')
                .replace('ê', 'e')
                .replace('í', 'i')
                .replace(' (nos salões de festas e auditórios com previsão de população superior a 200 pessoas)', '')
                .toLowerCase();
              return (
                <li key={item}>
                  <Link
                    href={{
                      pathname: `/medidas/${link}`,
                      query: {
                        altura: altura,
                        area: area,
                        carga: cargaIncendio,
                        ocupacao: 'A-2',
                      },
                    }}
                  >
                    {item}
                  </Link>
                </li>
              );
            })}
            {isolamento > 1 && (
              <li>
                <Link href={{
                  pathname: "/medidas/isolamentoderisco",
                  query:{
                    carga: cargaIncendio,
                  }
                }}>
                  Isolamento de risco
                </Link>
              </li>
            )}
          </ul>
        </div>
      )}
    </div> */
}
