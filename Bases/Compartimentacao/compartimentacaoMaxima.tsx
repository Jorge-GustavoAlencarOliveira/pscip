import React from 'react';
import { divisao } from '../../Tabelas/tabelaRedDivisao';
import { altura } from './tabelaCompartimentacao';
import { CalculoCompartimentacao } from './calculoCompartimentacao';

const CompartimentacaoMaxima = () => {
  const [dados, setDados] = React.useState({
    divisao: '0',
    altura: '0',
  });

  function handleDados(key: string, value: string) {
    setDados((prev) => ({ ...prev, [key]: value }));
  }

  const resultado = CalculoCompartimentacao(
    dados.divisao,
    altura[+dados.altura],
  );


  return (
    <div className="d-flex flex-column gap-4">
      <h1 className='text-primary'>Área Máxima de compartimentação</h1>
      <div className="d-flex align-items-center gap-2">
        <label>Divisão:</label>
        <select
          className="form-select"
          value={dados.divisao}
          name="divisao"
          onChange={({ target }) => handleDados(target.name, target.value)}
        >
          {divisao.map((item, index) => {
            return (
              <option key={index} value={index}>
                {item}
              </option>
            );
          })}
        </select>
      </div>
      <div className="d-flex align-items-center gap-2">
        <label>Altura:</label>
        <select
          className="form-select"
          value={dados.altura}
          name="altura"
          onChange={({ target }) => handleDados(target.name, target.value)}
        >
          {altura.map((item, index) => {
            return (
              <option key={index} value={index}>
                {item}
              </option>
            );
          })}
        </select>
      </div>
      <div >
        <span className='h4'>
          Área máxima de compartimentação:{' '}
          {resultado === ''
            ? <strong>Não existe valor máximo de compartimentação</strong>
            : <strong>{resultado}</strong>}
        </span>
        {resultado !== '' && resultado !== 'CT' && <strong className='h5'> m²</strong>}
        <div className='my-5'>
          <p >
            <span className='fw-bold'>NOTAS ESPECÍFICAS:</span>
            <br></br>
            (1) A área de compartimentação pode ser aumentada em 100%, caso haja
            sistema de detecção de incêndio (IT 14).
          </p>
          <p>
            <span className='fw-bold'>NOTAS GENÉRICAS</span>:
            <br></br>
            a) observar os casos permitidos de substituição da compartimentação de áreas, por sistema de chuveiros automáticos, acrescidos, em alguns casos, dos sistemas de detecção automática, conforme tabelas e exigências da IT 01 (Procedimentos Administrativos);
            <br></br>
            b) A resposta 'Não existe valor máximo de compartimentação', significa que estão dispensados da compartimentação horizontal, mantendo-se a compartimentação vertical,
            de acordo com as tabelas de exigências da IT 01 (Procedimentos Administrativos);
            <br></br>
            c) A inexistência de compartimentação vertical implica na somatória das áreas dos pavimentos para fins de cálculo da área máxima compartimentada;
            <br></br>
            d) no caso desta IT, as edificações térreas dotadas de subsolo para cálculo de área máxima de compartimentação deverão ser enquadradas na classe II desta tabela, caso esse subsolo não seja compartimentado em relação ao térreo.
            <br></br>
            e) CT - Consultar Corpo Técnico;
            <br></br>
            f) Havendo compartimentação vertical, a altura a ser considerada para aplicação desta tabela será a altura específica da ocupação.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CompartimentacaoMaxima;
