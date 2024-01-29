import React from 'react';
import IsolamentoReducer from './IsolamentoReducer';
import { dist1 } from './CalculoIsolamento';
import ModuloShow from './ModuloShow';
import { useIsolamento } from './useIsolamento';
import z from 'zod';

let id = 1;

const Isolamento = () => {
  const [modulos, dispatch] = React.useReducer(IsolamentoReducer, []);
  const { handleSubmit, register, errors, isolamentoSchema } = useIsolamento();
  type TIsolamentoSchema = z.infer<typeof isolamentoSchema>;

  function handleDelete(id: number) {
    dispatch({
      type: 'delete',
      id: id,
    });
  }

  function handleSubmitData(data: TIsolamentoSchema) {
    console.log(data);
    if (data) {
      const { risco1, risco2, bombeiro, Dprojeto } = data;
      const calculoIsolamento1 = dist1({
        largura: +risco1.maiorDimensao,
        altura: +risco1.menorDimensao,
        abertura: +risco1.abertura,
        cargaIncendio: +risco1.cargaIncendio,
        fatorSegurança: +bombeiro,
      });

      const calculoIsolamento2 = dist1({
        largura: +risco2.maiorDimensao,
        altura: +risco2.menorDimensao,
        abertura: +risco2.abertura,
        cargaIncendio: +risco2.cargaIncendio,
        fatorSegurança: +bombeiro,
      });
      dispatch({
        type: 'add',
        id: id++,
        risco1: {
          risco: risco1.nome,
          maiorDimensao: +risco1.maiorDimensao,
          menorDimensao: +risco1.menorDimensao,
          abertura: +risco1.abertura,
          cargaIncendio: +risco1.cargaIncendio,
          distancia: calculoIsolamento1.distancia,
          alfa: calculoIsolamento1.alfa,
          x: calculoIsolamento1.x,
          y: calculoIsolamento1.y,
          z: calculoIsolamento1.z,
          pavimentos: risco1.pavimentos,
          unidadeAutonoma: risco1.unidadeAutonoma,
          compartimentacaohorizontal: risco1.compartimentacaohorizontal,
          compartimentacaovertical: risco1.compartimentacaovertical,
          parteFachada: risco1.parteFachada,
          bombeiro: +bombeiro,
          severidade: calculoIsolamento1.valorSeveridade + 1,
          Dprojeto: Dprojeto,
          areaFachada: +risco1.maiorDimensao * +risco1.menorDimensao,
        },
        risco2: {
          risco: risco2.nome,
          maiorDimensao: +risco2.maiorDimensao,
          menorDimensao: +risco2.menorDimensao,
          abertura: +risco2.abertura,
          cargaIncendio: +risco2.cargaIncendio,
          distancia: calculoIsolamento2.distancia,
          alfa: calculoIsolamento2.alfa,
          x: calculoIsolamento2.x,
          y: calculoIsolamento2.y,
          z: calculoIsolamento2.z,
          pavimentos: risco2.pavimentos,
          unidadeAutonoma: risco2.unidadeAutonoma,
          compartimentacaohorizontal: risco2.compartimentacaohorizontal,
          compartimentacaovertical: risco2.compartimentacaovertical,
          parteFachada: risco2.parteFachada,
          bombeiro: +bombeiro,
          severidade: calculoIsolamento2.valorSeveridade + 1,
          Dprojeto: Dprojeto,
          areaFachada: +risco2.maiorDimensao * +risco2.menorDimensao,
        },
      });
    }
  }

  return (
    <>
      <div className="mb-4">
        <div className="mb-4">
          <h4 className="text-primary">Cálculo de Isolamento de Risco</h4>
          <span>Dimensione a distância de separação entre as edificações.</span>
        </div>
        <form onSubmit={handleSubmit(handleSubmitData)}>
          <div className="row">
            <div className="d-flex flex-column gap-2 mb-2 col-sm-6">
              <label className="fw-bold">Nome da Fachada 01: </label>
              <input
                type="text"
                {...register('risco1.nome')}
                className="form-control border border-primary-subtle"
              />
              {errors.risco1?.nome && (
                <span style={{ color: 'red' }} className="mb-2">
                  {errors.risco1.nome.message}
                </span>
              )}
            </div>
            <div className="d-flex flex-column gap-2 mb-2 col-sm-6">
              <label className="fw-bold">Número de pavimentos: </label>
              <input
                type="text"
                {...register('risco1.pavimentos')}
                className="form-control border border-primary-subtle"
              />
              {errors.risco1?.pavimentos && (
                <span style={{ color: 'red' }} className="mb-2">
                  {errors.risco1.pavimentos.message}
                </span>
              )}
            </div>
          </div>
          <div className="d-flex flex-column gap-2 mb-2">
            <span className="fw-bold fs-6">
              Atende aos critérios para se enquadrar como “unidade autônoma
              compartimentada”?
            </span>
            <div className="d-flex column-gap-sm-5 row-gap-1 flex-column flex-md-row flex-wrap mb-2">
              <div className="d-flex gap-2">
                <input
                  type="radio"
                  id="unidadeAutonomaSim"
                  value="Sim"
                  {...register('risco1.unidadeAutonoma')}
                />
                <label htmlFor="unidadeAutonomaSim">Sim</label>
              </div>
              <div className="d-flex gap-2 align-items-center">
                <input
                  type="radio"
                  id="unidadeAutonomaNao"
                  value="Não"
                  {...register('risco1.unidadeAutonoma')}
                />
                <label htmlFor="unidadeAutonomaNao">Não</label>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="d-flex flex-column gap-2 col-sm-6">
              <span className="fw-bold fs-6">
                Possui compartimentação horizontal?
              </span>
              <div className="d-flex column-gap-sm-5 row-gap-1 flex-column flex-md-row flex-wrap mb-2">
                <div className="d-flex gap-2">
                  <input
                    type="radio"
                    id="compartimentacaohorizontalSim"
                    value="Sim"
                    {...register('risco1.compartimentacaohorizontal')}
                  />
                  <label htmlFor="compartimentacaohorizontalSim">Sim</label>
                </div>
                <div className="d-flex gap-2 align-items-center">
                  <input
                    type="radio"
                    id="compartimentacaohorizontalNao"
                    value="Não"
                    {...register('risco1.compartimentacaohorizontal')}
                  />
                  <label htmlFor="compartimentacaohorizontalNao">Não</label>
                </div>
              </div>
            </div>
            <div className="d-flex flex-column gap-2 col-sm-6">
              <span className="fw-bold fs-6">
                Possui compartimentação vertical?
              </span>
              <div className="d-flex column-gap-sm-5 row-gap-1 flex-column flex-md-row flex-wrap mb-2">
                <div className="d-flex gap-2">
                  <input
                    type="radio"
                    id="compartimentacaoverticalSim"
                    value="Sim"
                    {...register('risco1.compartimentacaovertical')}
                  />
                  <label htmlFor="compartimentacaoverticalSim">Sim</label>
                </div>
                <div className="d-flex gap-2 align-items-center">
                  <input
                    type="radio"
                    id="compartimentacaoverticalNao"
                    value="Não"
                    {...register('risco1.compartimentacaovertical')}
                  />
                  <label htmlFor="compartimentacaoverticalNao">Não</label>
                </div>
              </div>
            </div>
          </div>
          <div className="d-flex flex-column  gap-2 mb-2 ">
            <label className="fw-bold">
              Parte da fachada considerada no cálculo (Tabela 1 da IT 05):
            </label>
            <input
              type="text"
              {...register('risco1.parteFachada')}
              className="form-control border-primary-subtle"
            />
            {errors.risco1?.parteFachada && (
              <span style={{ color: 'red' }} className="mb-2">
                {errors.risco1.parteFachada.message}
              </span>
            )}
          </div>
          <div className="row">
            <div className="d-flex flex-column  gap-2 mb-2 col-sm-6">
              <label className="fw-bold">Maior dimensão da fachada: </label>
              <input
                type="text"
                placeholder="m"
                {...register('risco1.maiorDimensao')}
                className="form-control border-primary-subtle"
              />
              {errors.risco1?.maiorDimensao && (
                <span style={{ color: 'red' }} className="mb-2">
                  {errors.risco1.maiorDimensao.message}
                </span>
              )}
            </div>
            <div className="d-flex flex-column  gap-2 mb-2 col-sm-6">
              <label className="fw-bold">Menor dimensão da fachada: </label>
              <input
                type="text"
                placeholder="m"
                {...register('risco1.menorDimensao')}
                className="form-control border-primary-subtle"
              />
              {errors.risco1?.menorDimensao && (
                <span style={{ color: 'red' }} className="mb-2">
                  {errors.risco1.menorDimensao.message}
                </span>
              )}
            </div>
          </div>
          <div className="row">
            <div className="d-flex flex-column  gap-2 mb-2 col-sm-6">
              <label className="fw-bold">
                Somatório das áreas das abertura:
              </label>
              <input
                type="text"
                placeholder="m²"
                {...register('risco1.abertura')}
                className="form-control border-primary-subtle"
              />
              {errors.risco1?.abertura && (
                <span style={{ color: 'red' }} className="mb-2">
                  {errors.risco1.abertura.message}
                </span>
              )}
            </div>
            <div className="d-flex flex-column  gap-2 mb-2 col-sm-6">
              <label className="fw-bold">Carga incêndio: </label>
              <input
                type="text"
                placeholder="MJ/m²"
                {...register('risco1.cargaIncendio')}
                className="form-control border-primary-subtle"
              />
              {errors.risco1?.cargaIncendio && (
                <span style={{ color: 'red' }} className="mb-2">
                  {errors.risco1.cargaIncendio.message}
                </span>
              )}
            </div>
          </div>
          <div
            className="w-full bg-primary my-3 my-sm-4"
            style={{ height: '2px' }}
          ></div>
          <div className="row">
            <div className="d-flex flex-column gap-2 mb-2 col-sm-6">
              <label className="fw-bold">Nome da Fachada 02: </label>
              <input
                type="text"
                {...register('risco2.nome')}
                className="form-control border border-primary-subtle"
              />
              {errors.risco2?.nome && (
                <span style={{ color: 'red' }} className="mb-2">
                  {errors.risco2.nome.message}
                </span>
              )}
            </div>
            <div className="d-flex flex-column gap-2 mb-2 col-sm-6">
              <label className="fw-bold">Número de pavimentos: </label>
              <input
                type="text"
                {...register('risco2.pavimentos')}
                className="form-control border border-primary-subtle"
              />
              {errors.risco2?.pavimentos && (
                <span style={{ color: 'red' }} className="mb-2">
                  {errors.risco2.pavimentos.message}
                </span>
              )}
            </div>
          </div>
          <div className="d-flex flex-column gap-2 mb-2">
            <span className="fw-bold fs-6">
              Atende aos critérios para se enquadrar como “unidade autônoma
              compartimentada”?
            </span>
            <div className="d-flex column-gap-sm-5 row-gap-1 flex-column flex-md-row flex-wrap mb-2">
              <div className="d-flex gap-2">
                <input
                  type="radio"
                  id="unidadeAutonomaSim1"
                  value="Sim"
                  {...register('risco2.unidadeAutonoma')}
                />
                <label htmlFor="unidadeAutonomaSim1">Sim</label>
              </div>
              <div className="d-flex gap-2 align-items-center">
                <input
                  type="radio"
                  id="unidadeAutonomaNao1"
                  value="Não"
                  {...register('risco2.unidadeAutonoma')}
                />
                <label htmlFor="unidadeAutonomaNao1">Não</label>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="d-flex flex-column gap-2 col-sm-6">
              <span className="fw-bold fs-6">
                Possui compartimentação horizontal?
              </span>
              <div className="d-flex column-gap-sm-5 row-gap-1 flex-column flex-md-row flex-wrap mb-2">
                <div className="d-flex gap-2">
                  <input
                    type="radio"
                    id="compartimentacaohorizontalSim"
                    value="Sim"
                    {...register('risco2.compartimentacaohorizontal')}
                  />
                  <label htmlFor="compartimentacaohorizontalSim">Sim</label>
                </div>
                <div className="d-flex gap-2 align-items-center">
                  <input
                    type="radio"
                    id="compartimentacaohorizontalNao"
                    value="Não"
                    {...register('risco2.compartimentacaohorizontal')}
                  />
                  <label htmlFor="compartimentacaohorizontalNao">Não</label>
                </div>
              </div>
            </div>
            <div className="d-flex flex-column gap-2 col-sm-6">
              <span className="fw-bold fs-6">
                Possui compartimentação vertical?
              </span>
              <div className="d-flex column-gap-sm-5 row-gap-1 flex-column flex-md-row flex-wrap mb-2">
                <div className="d-flex gap-2">
                  <input
                    type="radio"
                    id="compartimentacaoverticalSim1"
                    value="Sim"
                    {...register('risco2.compartimentacaovertical')}
                  />
                  <label htmlFor="compartimentacaoverticalSim1">Sim</label>
                </div>
                <div className="d-flex gap-2 align-items-center">
                  <input
                    type="radio"
                    id="compartimentacaoverticalNao1"
                    value="Não"
                    {...register('risco2.compartimentacaovertical')}
                  />
                  <label htmlFor="compartimentacaoverticalNao1">Não</label>
                </div>
              </div>
            </div>
          </div>
          <div className="d-flex flex-column  gap-2 mb-2 ">
            <label className="fw-bold">
              Parte da fachada considerada no cálculo (Tabela 1 da IT 05):
            </label>
            <input
              type="text"
              {...register('risco2.parteFachada')}
              className="form-control border-primary-subtle"
            />
            {errors.risco2?.parteFachada && (
              <span style={{ color: 'red' }} className="mb-2">
                {errors.risco2.parteFachada.message}
              </span>
            )}
          </div>
          <div className="row">
            <div className="d-flex flex-column  gap-2 mb-2 col-sm-6">
              <label className="fw-bold">Maior dimensão da fachada: </label>
              <input
                type="text"
                placeholder="m"
                {...register('risco2.maiorDimensao')}
                className="form-control border-primary-subtle"
              />
              {errors.risco2?.maiorDimensao && (
                <span style={{ color: 'red' }} className="mb-2">
                  {errors.risco2.maiorDimensao.message}
                </span>
              )}
            </div>
            <div className="d-flex flex-column  gap-2 mb-2 col-sm-6">
              <label className="fw-bold">Menor dimensão da fachada: </label>
              <input
                type="text"
                placeholder="m"
                {...register('risco2.menorDimensao')}
                className="form-control border-primary-subtle"
              />
              {errors.risco2?.menorDimensao && (
                <span style={{ color: 'red' }} className="mb-2">
                  {errors.risco2.menorDimensao.message}
                </span>
              )}
            </div>
          </div>
          <div className="row">
            <div className="d-flex flex-column  gap-2 mb-2 col-sm-6">
              <label className="fw-bold">
                Somatório das áreas das abertura:
              </label>
              <input
                type="text"
                placeholder="m²"
                {...register('risco2.abertura')}
                className="form-control border-primary-subtle"
              />
              {errors.risco2?.abertura && (
                <span style={{ color: 'red' }} className="mb-2">
                  {errors.risco2.abertura.message}
                </span>
              )}
            </div>
            <div className="d-flex flex-column  gap-2 mb-2 col-sm-6">
              <label className="fw-bold">Carga incêndio: </label>
              <input
                type="text"
                placeholder="MJ/m²"
                {...register('risco2.cargaIncendio')}
                className="form-control border-primary-subtle"
              />
              {errors.risco2?.cargaIncendio && (
                <span style={{ color: 'red' }} className="mb-2">
                  {errors.risco2.cargaIncendio.message}
                </span>
              )}
            </div>
          </div>
          <div
            className="w-full bg-primary my-3 my-sm-4"
            style={{ height: '2px' }}
          ></div>
          <div className="d-flex flex-column  gap-2 mb-2 ">
            <label className="fw-bold">Distância de projeto: </label>
            <input
              type="text"
              placeholder="m"
              {...register('Dprojeto')}
              className="form-control border-primary-subtle"
            />
            {errors.Dprojeto && (
              <span style={{ color: 'red' }} className="mb-2">
                {errors.Dprojeto.message}
              </span>
            )}
          </div>
          <div className="d-flex  flex-column my-3">
            <span className="fw-bold fs-6">
              O município em que está localizado as edificações possui Corpo de
              Bombeiros Militar com viaturas para combate a incêndios?
            </span>
            <div className="d-flex column-gap-sm-5 row-gap-1 flex-column flex-md-row flex-wrap mt-2">
              <div className="d-flex gap-2 align-items-center">
                <input
                  type="radio"
                  id="fatorSegurancaSim"
                  value={'1.5'}
                  {...register('bombeiro')}
                />
                <label htmlFor="fatorSegurancaSim">Sim</label>
              </div>
              <div className="d-flex gap-2 align-items-center">
                <input
                  type="radio"
                  id="fatorSegurancaNao"
                  value={'3'}
                  {...register('bombeiro')}
                />
                <label htmlFor="fatorSegurancaNao">Não</label>
              </div>
            </div>
              {errors.bombeiro && (
                <div className="my-2">
                  <span style={{ color: 'red'}} >
                    {errors.bombeiro.message}
                  </span>
                </div>
              )}
          </div>
          <button className="btn btn-primary float-end" type="submit">
            Calcular
          </button>
        </form>
      </div>
      <ModuloShow modulos={modulos} onDelete={handleDelete} />
    </>
  );
};

export default Isolamento;
