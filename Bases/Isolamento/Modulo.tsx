import { moduloProps } from './IsolamentoReducer';
import { Table } from 'react-bootstrap';

interface modProps {
  modulo: moduloProps;
  onDelete: (id: number) => void;
}
const Modulo = ({ modulo, onDelete }: modProps) => {
  return (
    <div className='border-secondary border-top pt-2'>
      <button className='float-end btn btn-secondary mb-2' onClick={() => onDelete(modulo.id)}>
        Excluir
      </button>
      <Table striped bordered hover>
        <thead>
          <tr className='fw-bold'>
            <td className='w-50' >Nome da edificação:</td> 
            <td >{modulo.risco1?.risco}</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Largura</td>
            <td>{(modulo.risco1?.maiorDimensao).toString().replace('.',',')} metros</td>
          </tr>
          <tr>
            <td>Altura</td>
            <td>{(modulo.risco1?.menorDimensao).toString().replace('.',',')} metros</td>
          </tr>
          <tr>
            <td>Somatório das áreas das aberturas</td>
            <td>{(modulo.risco1?.abertura).toString().replace('.',',')} m²</td>
          </tr>
          <tr>
            <td>Carga incêndio</td>
            <td>{(modulo.risco1?.cargaIncendio).toString().replace('.',',')} MJ/m²</td>
          </tr>
          <tr>
            <td>X = maior dimensão/menor dimensão</td>
            <td>{(modulo?.risco1?.x?.toFixed(2)).toString().replace('.',',')}</td>
          </tr>
          <tr>
            <td>Y = (área das aberturas/área da fachada) x 100</td>
            <td>{(modulo?.risco1?.y?.toFixed(2)).toString().replace('.',',')} %</td>
          </tr>
          <tr>
            <td>Índice α</td>
            <td>{(modulo?.risco1?.alfa)?.toString().replace('.',',')}</td>
          </tr>
          <tr className='fw-bold'>
            <td>
            D = (menor dimensão da fachada x α) + ß  
            </td>
            <td>{(modulo?.risco1?.distancia?.toFixed(2)).toString().replace('.',',')} metros</td>
          </tr>
        </tbody>
      </Table>
      <Table striped bordered hover>
        <tbody>
          <tr className='fw-bold'>
            <td className='w-50'>Nome da edificação</td>
            <td>{modulo.risco2?.risco}</td>
          </tr>
          <tr>
            <td>Largura</td>
            <td>{(modulo.risco2?.maiorDimensao).toString().replace('.',',')} metros</td>
          </tr>
          <tr>
            <td>Altura</td>
            <td>{(modulo.risco2?.menorDimensao.toString().replace('.',','))} metros</td>
          </tr>
          <tr>
            <td>Somatório das áreas das aberturas</td>
            <td>{(modulo.risco2?.abertura).toString().replace('.',',')} m²</td>
          </tr>
          <tr>
            <td>Carga incêndio</td>
            <td>{(modulo.risco2?.cargaIncendio).toString().replace('.',',')} MJ/m²</td>
          </tr>
          <tr>
            <td>X = maior dimensão/menor dimensão</td>
            <td>{(modulo?.risco2?.x?.toFixed(2)).toString().replace('.',',')}</td>
          </tr>
          <tr>
            <td>Y = (área das aberturas/área da fachada) x 100</td>
            <td>{(modulo?.risco2?.y?.toFixed(2)).toString().replace('.',',')} %</td>
          </tr>
          <tr>
            <td>Índice α</td>
            <td>{(modulo?.risco2?.alfa)?.toString().replace('.',',')}</td>
          </tr>
          <tr className='fw-bold'>
            <td>
            D = (menor dimensão da fachada x α) + ß  
            </td>
            <td>{(modulo?.risco2?.distancia?.toFixed(2)).toString().replace('.',',')} metros</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};

export default Modulo;
