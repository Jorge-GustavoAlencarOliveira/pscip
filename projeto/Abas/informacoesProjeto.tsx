import React from 'react';
import ButtonNext from '../Navbar/buttonNext';
import { Form } from 'react-bootstrap';
import {
  informacoesProps,
  useInformation,
} from '../../Components/Hooks/useDados';
import { useContextProjeto } from '../Context/contextProjeto';
import { useRouter } from 'next/router';
import { toast } from 'react-toastify';
import { handleUpdateProject } from '../../actions/actions';
interface pageProps {
  isActive: boolean;
  onshow: (index: number) => void;
}

const InformacoesProjeto = ({ isActive, onshow}: pageProps) => {
  const {addAllDataBuilding, allDataBuilding: {informacoes}, action } =
    useContextProjeto();
  const { handleSubmit, errors, register } = useInformation(informacoes);
  const router = useRouter()

  function handleInformations(data: informacoesProps) {
    if(action === 'true') {
      handleUpdateProject(data, router.query.id as string)
      toast.success('Alterações salvas')
      router.replace(router.asPath);
      addAllDataBuilding('informacoes', data);
      return 
    }
    addAllDataBuilding('informacoes', data);
    onshow(1);
    handleUpdateProject(data, router.query.id as string);
  }

  if (isActive) {
    return (
      <div className="mb-5">
        <div className="mb-4">
          <h4 className="text-primary">Informações do Projeto</h4>
          <span>Insira as informações do seu projeto</span>
        </div>
        <Form onSubmit={handleSubmit(handleInformations)}>
          <Form.Group className="mb-2">
            <Form.Label className="fw-bold">Nome do projeto</Form.Label>
            <Form.Control type="text" {...register('projeto')} />
          </Form.Group>
          {errors.projeto && (
            <div className="mb-2">
              <span style={{ color: 'red' }}>{errors.projeto.message}</span>
            </div>
          )}
          <div className="row">
            <div className="col-sm-6">
              <Form.Group className="mb-2">
                <Form.Label className="fw-bold">
                  Proprietário / Responsável pelo Uso
                </Form.Label>
                <Form.Control type="text" {...register('proprietario')} />
              </Form.Group>
              {errors.proprietario && (
                <div className="mb-2">
                  <span style={{ color: 'red' }}>
                    {errors.proprietario.message}
                  </span>
                </div>
              )}
            </div>
            <div className="col-sm-6">
              <Form.Group className="mb-2">
                <Form.Label className="fw-bold">CPF</Form.Label>
                <Form.Control type="text" {...register('cpf')} />
              </Form.Group>
              {errors.cpf && (
                <div className="mb-2">
                  <span style={{ color: 'red' }}>{errors.cpf.message}</span>
                </div>
              )}
            </div>
          </div>
          <div className="row">
            <div className="col-sm-6">
              <Form.Group className="mb-2">
                <Form.Label className="fw-bold">Razão Social</Form.Label>
                <Form.Control type="text" {...register('razaoSocial')} />
              </Form.Group>
              {errors.razaoSocial && (
                <div className="mb-2">
                  <span style={{ color: 'red' }}>
                    {errors.razaoSocial.message}
                  </span>
                </div>
              )}
            </div>
            <div className="col-sm-6">
              <Form.Group className="mb-2">
                <Form.Label className="fw-bold">CNPJ</Form.Label>
                <Form.Control type="text" {...register('cnpj')} />
              </Form.Group>
              {errors.cnpj && (
                <div className="mb-2">
                  <span style={{ color: 'red' }}>{errors.cnpj.message}</span>
                </div>
              )}
            </div>
          </div>
          <div className="mb-4">
            <h4 className="text-primary">Endereço</h4>
            <span>Insira o endereço da edificação</span>
          </div>
          <div className="row">
            <div className="col-sm-6">
              <Form.Group className="mb-2">
                <Form.Label className="fw-bold">Tipo</Form.Label>
                <Form.Control type="text" {...register('endereco.tipo')} />
              </Form.Group>
              {errors.endereco?.tipo && (
                <div className="mb-2">
                  <span style={{ color: 'red' }}>
                    {errors.endereco.tipo.message}
                  </span>
                </div>
              )}
            </div>
            <div className="col-sm-6">
              <Form.Group className="mb-2">
                <Form.Label className="fw-bold">Nome do logradouro</Form.Label>
                <Form.Control
                  type="text"
                  {...register('endereco.logradouro')}
                />
              </Form.Group>
              {errors.endereco?.logradouro && (
                <div className="mb-2">
                  <span style={{ color: 'red' }}>
                    {errors.endereco.logradouro.message}
                  </span>
                </div>
              )}
            </div>
          </div>
          <div className="row">
            <div className="col-sm-6">
              <Form.Group className="mb-2">
                <Form.Label className="fw-bold">
                  Número do logradouro
                </Form.Label>
                <Form.Control type="text" {...register('endereco.numero')} />
              </Form.Group>
              {errors.endereco?.numero && (
                <div className="mb-2">
                  <span style={{ color: 'red' }}>
                    {errors.endereco.numero.message}
                  </span>
                </div>
              )}
            </div>
            <div className="col-sm-6">
              <Form.Group className="mb-2">
                <Form.Label className="fw-bold">Bairro</Form.Label>
                <Form.Control type="text" {...register('endereco.bairro')} />
              </Form.Group>
              {errors.endereco?.bairro && (
                <div className="mb-2">
                  <span style={{ color: 'red' }}>
                    {errors.endereco.bairro.message}
                  </span>
                </div>
              )}
            </div>
          </div>
          <div className="row">
            <div className="col-sm-6">
              <Form.Group className="mb-2">
                <Form.Label className="fw-bold">Cidade</Form.Label>
                <Form.Control type="text" {...register('endereco.cidade')} />
              </Form.Group>
              {errors.endereco?.cidade && (
                <div className="mb-2">
                  <span style={{ color: 'red' }}>
                    {errors.endereco.cidade.message}
                  </span>
                </div>
              )}
            </div>
            <div className="col-sm-6">
              <Form.Group className="mb-2">
                <Form.Label className="fw-bold">Estado</Form.Label>
                <Form.Control type="text" {...register('endereco.estado')} />
              </Form.Group>
              {errors.endereco?.estado && (
                <div className="mb-2">
                  <span style={{ color: 'red' }}>
                    {errors.endereco.estado.message}
                  </span>
                </div>
              )}
            </div>
          </div>
          {action === 'true' ? <button className="btn btn-success float-end mt-4" type='submit'>Salvar alterações</button> : <ButtonNext type="submit" />}
        </Form>
      </div>
    );
  }
};

export default InformacoesProjeto;

