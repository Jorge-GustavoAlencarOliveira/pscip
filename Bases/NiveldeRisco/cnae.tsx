import React from 'react';
import { useNiveldeRisco } from './useNiveldeRisco';
import { InputGroup, Table } from 'react-bootstrap';
import { NiveldeRiscoProps } from '../../projeto/Context/contextProjeto';

const Cnae = () => {
  const [query, setQuery] = React.useState('');
  const { filterCNAE } = useNiveldeRisco({} as NiveldeRiscoProps);

  const [dados, setDados] = React.useState([]);
  const result = filterCNAE(query);

  // React.useEffect(() => {
  //   async function cnaeFetch() {
  //     const response = await fetch(
  //       `https://servicodados.ibge.gov.br/api/v2/cnae/subclasses`,
  //     );
  //     const data = await response.json();
  //     if (response.status === 200) setDados(data);
  //   }
  //   cnaeFetch();
  // }, []);

  
  // const resultapi = dados.filter((item) => item?.id.indexOf(query) !== -1);

  
  return (
    <div>
      <InputGroup>
        <input
          className="w-100 form-control"
          type="text"
          placeholder="Digite o CNAE"
          onChange={({ target }) => setQuery(target.value)}
        />
      </InputGroup>
      <ul className="mt-4 px-3">
        {query && typeof result !== 'string' && result?.map((item, index) => {
          return (
            <li key={index}>{item}</li>
          )
        })}
      </ul>
    </div>
  );
};

export default Cnae;

{/* {result.length > 0 && 
  <Table bordered >
    <thead>
      <tr>
        <td>CNAE</td>
        <td>DENOMINAÇÃO</td>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>{resultapi[0]?.id}</td>
        <td>{resultapi[0]?.descricao}</td>
      </tr>
    </tbody>
  </Table>
} */}