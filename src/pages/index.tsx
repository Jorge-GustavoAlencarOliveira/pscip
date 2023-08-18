import React from 'react';
import Logo from '../../public/logo.png';
import Image from 'next/image';
import { FaSignInAlt } from 'react-icons/fa';
import Link from 'next/link';
import styles from './home.module.css';

const index = () => {
  return (
    <div className={`container-fluid ${styles.App}`}>
      <header className="d-flex justify-content-between align-items-center">
        <div>
          <Image src={Logo} alt="Logo" width={150} />
        </div>
        <nav className="d-flex justify-content-between align-items-center gap-3">
          <Link
            href="/login/signin"
            className="text-decoration-none d-flex justify-content-between align-items-center gap-2"
          >
            <FaSignInAlt size={20} color="text-primary" />
            <span>Login</span>
          </Link>
          <Link
            href="/login/signup"
            className="text-decoration-none d-flex justify-content-between align-items-center gap-2"
          >
            <FaSignInAlt size={20} color="text-primary" />
            <span>Inscreva-se</span>
          </Link>
        </nav>
      </header>
      <div className="my-3">
        <span className="text-dark ">
          Nosso site foi feito para atender você que deseja regularizar seu
          imóvel, como também para profissionais técnicos e empresas que atuam
          na área de prevenção e incêndio.{' '}
          <Link href="/login/signup" className="text-decoration-none text-dark fw-bold">
            FAÇA SEU CADASTRO
          </Link>{' '}
          e tenha acesso GRATUITO a ferramentas exclusivas em nossa plataforma
          para desenvolver Projetos de Incêndio e Pânico.
        </span>
        <nav className="my-4">
          <div className="row">
            <div className="col-6 col-sm-4 d-flex flex-column gap-2 py-2">
              <Link
                href="/login/signin"
                className="btn btn-primary text-decoration-none fw-bold flex-1"
              >
                ENTENDA SEU IMÓVEL
              </Link>
              <span>
                Informe as características da sua edificação e saíba como
                regulariza-la.
              </span>
            </div>
            <div className="col-6 col-sm-4 d-flex flex-column gap-2 py-2">
              <Link
                href="/login/signin"
                className="btn btn-primary text-decoration-none fw-bold flex-1"
              >
                FAÇA SEU PROJETO AQUI
              </Link>
              <span>Desenvolva seu Projeto de Incêndio em nossa plataforma, aumente a sua chance de aprovação utiliznado nossas ferramentas.</span>
            </div>
            <div className="col-6 col-sm-4 d-flex flex-column gap-2 py-2">
              <Link
                href="/login/signin"
                className="btn btn-primary text-decoration-none fw-bold flex-1"
              >
                MEMORIAIS DE INCÊNDIO
              </Link>
              <span>Todos os memoriais exigidos pelo Corpo de Bombeiros à sua disposição para preenchimento online.</span>
            </div>
            <div className="col-6 col-sm-4 d-flex flex-column gap-2 py-2">
              <Link
                href="/login/signin"
                className="btn btn-primary text-decoration-none fw-bold flex-1"
              >
                CALCULADORA DE INCÊNDIO
              </Link>
              <span>Tenha acesso a calculos de saídas de emergências, brigada de incêndio,  carga de incêndio e isolamento de risco AQUI.</span>
            </div>
            <div className="col-6 col-sm-4 d-flex flex-column gap-2 py-2">
              <Link
                href="https://www.prevencaobombeiros.mg.gov.br/lops/portal.do" target='_blank'
                className="btn btn-primary text-decoration-none fw-bold flex-1"
              >
                INFOSCIP
              </Link>
              <span>Acesse o Portal do INFOSCIP para protocolar seu Projeto de Incêndio e declarar eventos temporários.</span>
            </div>
            <div className="col-6 col-sm-4 d-flex flex-column gap-2 py-2">
              <Link
                href="https://portalservicos.jucemg.mg.gov.br/licenciamento-web/pages/licenciamento/simuladorGrauDeRisco.jsf"
                target='_blank'
                className="btn btn-primary text-decoration-none fw-bold flex-1"
              >
                JUCEMG
              </Link>
              <span>Acesse o Portal da Jucemg para preencher a sua autodeclaração de risco da sua empresa. Tenha orientações de como preencher sua declaração. </span>
            </div>
            <div className="col-6 col-sm-4 d-flex flex-column gap-2 py-2">
              <Link
                href="https://www.bombeiros.mg.gov.br/normastecnicas"
                target='_blank'
                className="btn btn-primary text-decoration-none fw-bold flex-1"
              >
                LEGISLAÇÃO
              </Link>
              <span>Acesse toda a Legislação de Incêndio e Pânico do Corpo de Bombeiros de Minas Gerais.</span>
            </div>
            <div className="col-6 col-sm-4 d-flex flex-column gap-2 py-2">
              <Link
                href="/login/signin"
                className="btn btn-primary text-decoration-none fw-bold flex-1"
              >
                GERENCIE SEUS PROJETOS AQUI
              </Link>
              <span>Responsável Técnico, faça orçamentos de projetos para seus clientes aqui. Gerencie todas as etapas da aprovação do Projeto e tenha um portifólio de empresas com quem você ja trabalhou.</span>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default index;
