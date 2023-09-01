import React from 'react';
import ButtonNext from './Navbar/buttonNext';
import { Form } from 'react-bootstrap';
import {
  UseDadosEdificação,
  informacoesProps,
} from '../Components/Hooks/useDados';
import { DataStorage } from '../dataContext';

interface pageProps {
  isActive: boolean;
  onshow: (index: number) => void;
  dados?: informacoesProps;
}

const InformacoesProjeto = ({ isActive, onshow, dados }: pageProps) => {
  const { valoresInformacoes } = React.useContext(DataStorage);
  const { setInformacoesEdificacao, information, setAllInformacoesEdificacao } =
    UseDadosEdificação();
  React.useEffect(() => {
    if (dados) {
      setAllInformacoesEdificacao(dados);
    }
  }, []);
  return (
    <div className={isActive ? 'd-block mb-5' : 'd-none'}>
      <div className={`bg-{#6495ED} px-2`}>
        <h1 className="text-primary">Informações do Projeto</h1>
        <Form>
          <Form.Group className="mb-3">
            <Form.Label>Nome do projeto</Form.Label>
            <Form.Control
              type="text"
              placeholder=""
              name="projeto"
              value={information.projeto}
              onChange={({ target }) =>
                setInformacoesEdificacao(target.name, target.value)
              }
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Proprietário / Responsável pelo Uso</Form.Label>
            <Form.Control
              type="text"
              name="proprietario"
              placeholder=""
              value={information.proprietario}
              onChange={({ target }) =>
                setInformacoesEdificacao(target.name, target.value)
              }
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>CPF</Form.Label>
            <Form.Control
              type="text"
              name="cpf"
              placeholder=""
              value={information.cpf}
              onChange={({ target }) =>
                setInformacoesEdificacao(target.name, target.value)
              }
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Razão Social</Form.Label>
            <Form.Control
              type="text"
              name="razaoSocial"
              placeholder=""
              value={information.razaoSocial}
              onChange={({ target }) =>
                setInformacoesEdificacao(target.name, target.value)
              }
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>CNPJ</Form.Label>
            <Form.Control
              type="text"
              name="cnpj"
              placeholder=""
              value={information.cnpj}
              onChange={({ target }) =>
                setInformacoesEdificacao(target.name, target.value)
              }
            />
          </Form.Group>
        </Form>
        <h2 className="text-primary">Endereço</h2>
        <Form>
          <Form.Group className="mb-3">
            <Form.Label>Tipo</Form.Label>
            <Form.Control
              type="text"
              name="tipo"
              placeholder=""
              value={information.tipo}
              onChange={({ target }) => {
                setInformacoesEdificacao(target.name, target.value);
              }}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Nome do logradouro</Form.Label>
            <Form.Control
              type="text"
              name="logradouro"
              placeholder=""
              value={information.logradouro}
              onChange={({ target }) => {
                setInformacoesEdificacao(target.name, target.value);
              }}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Número do logradouro</Form.Label>
            <Form.Control
              type="text"
              name="numero"
              placeholder=""
              value={information.numero}
              onChange={({ target }) => {
                setInformacoesEdificacao(target.name, target.value);
              }}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Bairro</Form.Label>
            <Form.Control
              type="text"
              name="bairro"
              placeholder=""
              value={information.bairro}
              onChange={({ target }) => {
                setInformacoesEdificacao(target.name, target.value);
              }}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Cidade</Form.Label>
            <Form.Control
              type="text"
              name="cidade"
              placeholder=""
              value={information.cidade}
              onChange={({ target }) => {
                setInformacoesEdificacao(target.name, target.value);
              }}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Estado</Form.Label>
            <Form.Control
              type="text"
              name="estado"
              placeholder=""
              value={information.estado}
              onChange={({ target }) => {
                setInformacoesEdificacao(target.name, target.value);
              }}
            />
          </Form.Group>
        </Form>
        <ButtonNext
          onclick={() => {
            onshow(1);
            valoresInformacoes(information);
          }}
        />
      </div>
    </div>
  );
};

export default InformacoesProjeto;
