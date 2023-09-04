import React from 'react';
import TabelaSaidaEmergencia from './tabelaSaidaEmergencia';
import { calculoSaidaPavimento, porta, unidadePassagem } from './Calculo';

interface saidaPavimentoProps {
  populacao: number | undefined;
}

const SaidaPavimento = ({ populacao }: saidaPavimentoProps) => {
  const { divisao } = TabelaSaidaEmergencia();
  const [div, setDiv] = React.useState<number>(0);
  return (
    <div className="d-flex flex-column gap-2 form-group my-4">
      <h5>Selecionar divisão para cálculo de saídas do pavimento</h5>
      <div className="d-flex align-items-center gap-2 ">
        <span>Divisão: </span>
        <select
          onChange={({ target }) => setDiv(+target.value)}
          className="form-select"
        >
          {divisao.map((item, index) => {
            return (
              <option key={index} value={index}>
                {item[0]}
              </option>
            );
          })}
        </select>
      </div>
      {populacao !== 0 && populacao && (
        // <Table striped bordered hover className="table-secondary my-3">
        //   <tbody>
        //     <tr>
        //       <td>Acessos e descargas </td>
        //       <td>
        //         {calculoSaidaPavimento(populacao, div).acesso < 2 ? 2 : calculoSaidaPavimento(populacao, div).acesso}  unidade(s) de
        //         passagem
        //       </td>
        //     </tr>
        //     <tr>
        //       <td>Escadas e rampas </td>
        //       <td>
        //         {calculoSaidaPavimento(populacao, div).escada < 2 ? 2 : calculoSaidaPavimento(populacao, div).escada} unidade(s) de
        //         passagem
        //       </td>
        //     </tr>
        //     <tr>
        //       <td>Portas </td>
        //       <td>
        //         {calculoSaidaPavimento(populacao, div).porta} unidade(s) de
        //         passagem
        //       </td>
        //     </tr>
        //   </tbody>
        // </Table>
        <div className="d-flex flex-column gap-2">
          <span>
            Acessos e Descargas: N = P/C = {populacao}/{divisao[div][1][0]} ={' '}
            {calculoSaidaPavimento(populacao, div).acesso < 2
              ? 2
              : calculoSaidaPavimento(populacao, div).acesso}{' '}
            U.P.(s) ={' '}
            {calculoSaidaPavimento(populacao, div).acesso < 2
              ? unidadePassagem(2)
              : unidadePassagem(
                  calculoSaidaPavimento(populacao, div).acesso,
                )}{' '}
            m
          </span>
          <span>
            Escadas e Rampas: N = P/C = {populacao}/{divisao[div][1][1]} ={' '}
            {calculoSaidaPavimento(populacao, div).escada < 2
              ? 2
              : calculoSaidaPavimento(populacao, div).escada}{' '}
            U.P.(s) ={' '}
            {calculoSaidaPavimento(populacao, div).escada < 2
              ? unidadePassagem(2)
              : unidadePassagem(
                  calculoSaidaPavimento(populacao, div).escada,
                )}{' '}
            m
          </span>
          <span>
            Portas: N = P/C = {populacao}/{divisao[div][1][2]} ={' '}
            {calculoSaidaPavimento(populacao, div).porta <= 4
              ? calculoSaidaPavimento(populacao, div)
                  .porta.toString()
                  .replace('.', ',')
              : Math.ceil(calculoSaidaPavimento(populacao, div).porta)}{' '}
            U.P.(s) = {porta(calculoSaidaPavimento(populacao, div).porta)}
          </span>
        </div>
      )}
    </div>
  );
};

export default SaidaPavimento;
