import React from 'react';
import ButtonNext from './Navbar/buttonNext';
import { toast } from 'react-toastify';
import { setupAPIClient } from '@/services/api';
import { Form } from 'react-bootstrap';
import { UseDadosEdificação } from '../Components/Hooks/useDados';
import { DataStorage } from '../dataContext';

interface pageProps {
  isActive: boolean;
  onshow: (index: number) => void;
}

const InformacoesProjeto = ({ isActive, onshow }: pageProps) => {
  const {
    setInformacoesEdificacao,
    information,
    setEnderecoEdificação,
    endereco,
  } = UseDadosEdificação();
  const { valoresInformacoes } = React.useContext(DataStorage);

  return (
    <div className={isActive ? 'd-block' : 'd-none'}>
      <div className={`bg-{#6495ED} px-2`}>
        <h1 className="text-primary">Informações do Projeto</h1>
        <Form>
          <Form.Group className="mb-3" controlId="proprietario">
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
          <Form.Group className="mb-3" controlId="proprietario">
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
          <Form.Group className="mb-3" controlId="proprietario">
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
          <Form.Group className="mb-3" controlId="proprietario">
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
          <Form.Group className="mb-3" controlId="proprietario">
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
          <Form.Group className="mb-3" controlId="proprietario">
            <Form.Label>Tipo</Form.Label>
            <Form.Control
              type="text"
              name="endereco"
              placeholder=""
              value={endereco.tipo}
              onChange={({ target }) => {
                setEnderecoEdificação('tipo', target.value);
                setInformacoesEdificacao('endereco', endereco);
              }}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="proprietario">
            <Form.Label>Nome do logradouro</Form.Label>
            <Form.Control
              type="text"
              placeholder=""
              value={endereco.logradouro}
              onChange={({ target }) => {
                setEnderecoEdificação('logradouro', target.value);
                setInformacoesEdificacao('endereco', endereco);
              }}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="proprietario">
            <Form.Label>Número do logradouro</Form.Label>
            <Form.Control
              type="text"
              placeholder=""
              value={endereco.numero}
              onChange={({ target }) => {
                setEnderecoEdificação('numero', target.value);
                setInformacoesEdificacao('endereco', endereco);
              }}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="proprietario">
            <Form.Label>Bairro</Form.Label>
            <Form.Control
              type="text"
              placeholder=""
              value={endereco.bairro}
              onChange={({ target }) => {
                setEnderecoEdificação('bairro', target.value);
                setInformacoesEdificacao('endereco', endereco);
              }}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="proprietario">
            <Form.Label>Cidade</Form.Label>
            <Form.Control
              type="text"
              placeholder=""
              value={endereco.cidade}
              onChange={({ target }) => {
                setEnderecoEdificação('cidade', target.value);
                setInformacoesEdificacao('endereco', endereco);
              }}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="proprietario">
            <Form.Label>Estado</Form.Label>
            <Form.Control
              type="text"
              placeholder=""
              value={endereco.estado}
              onChange={({ target }) => {
                setEnderecoEdificação('estado', target.value);
                setInformacoesEdificacao('endereco', endereco);
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
